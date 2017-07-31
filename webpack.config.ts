import * as webpack from "webpack"
import { join, resolve } from "path"
import * as HtmlWebpackPlugin from "html-webpack-plugin"
import * as ExtractTextPlugin from "extract-text-webpack-plugin"
import * as CleanWebpackPlugin from "clean-webpack-plugin"

type IWebpackEnv = "dev" | "prod"

interface IWebpackConfigParams {
  env: IWebpackEnv
}

function getMergedConfig({ env }: IWebpackConfigParams): webpack.Configuration {
  const baseConfig: webpack.Configuration = getBaseConfig()
  const specificConfig: webpack.Configuration = getSpecificConfig(env, baseConfig)
  return { ...baseConfig, ...specificConfig }
}

function getBaseConfig(): webpack.Configuration {
  return {
    entry: [resolve("src", "index.tsx")],
    plugins: [
      new HtmlWebpackPlugin({
        template: join("src", "index.html"),
        inject: "body",
        filename: "index.html"
      }),
      new webpack.NoEmitOnErrorsPlugin(),
      new CleanWebpackPlugin(["dist"])
    ],
    output: {
      path: resolve("dist"),
      filename: "[hash].bundle.js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          exclude: resolve(__dirname, "node_modules"),
          include: resolve(__dirname, "src"),
          loaders: ["react-hot-loader/webpack", "awesome-typescript-loader"],
          test: /\.(t|j)sx?$/
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: ["url-loader?limit=10000", "img-loader"]
        },
        {
          test: /\.(ttf|otf|eot|svg|woff2?)(\?.+)?$/,
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      ]
    },
    resolve: {
      extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
    }
  }
}

function getSpecificConfig(env: IWebpackEnv, baseConfig: webpack.Configuration): webpack.Configuration {
  return env === "prod" ? getProdConfig(baseConfig) : getDevConfig(baseConfig)
}

function getProdConfig(baseConfig: webpack.Configuration): webpack.Configuration {
  return {
    devtool: "source-map",
    output: {
      ...baseConfig.output,
      filename: "assets/js/[name].[chunkhash].bundle.js"
    },
    plugins: [
      ...(baseConfig.plugins as webpack.Plugin[]),
      new ExtractTextPlugin("assets/css/[chunkhash].bundle.css"),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: module => {
          return module.context && module.context.indexOf("node_modules") !== -1
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
      })
    ],
    module: {
      ...baseConfig.module,
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        }
      ]
    }
  }
}

function getDevConfig(baseConfig: webpack.Configuration): webpack.Configuration {
  return {
    devtool: "source-map",
    entry: ["react-hot-loader/patch", ...(baseConfig.entry as string[])],
    output: {
      ...baseConfig.output,
      filename: "[name].[hash].bundle.js"
    },
    plugins: [
      ...(baseConfig.plugins as webpack.Plugin[]),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development")
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ],
    devServer: {
      hot: true,
      port: 3000,
      contentBase: resolve("dist"),
      publicPath: "/"
    },
    module: {
      ...baseConfig.module,
      rules: [
        ...(baseConfig.module as any).rules,
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  }
}

export default getMergedConfig
