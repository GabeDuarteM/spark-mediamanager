import * as CleanWebpackPlugin from "clean-webpack-plugin"
import * as ExtractTextPlugin from "extract-text-webpack-plugin"
import * as HtmlWebpackPlugin from "html-webpack-plugin"
import { join, resolve } from "path"
import * as webpack from "webpack"

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
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: ["url-loader?limit=10000", "img-loader"],
        },
        {
          loader: "url-loader",
          options: {
            limit: 10000,
          },
          test: /\.(ttf|otf|eot|svg|woff2?)(\?.+)?$/,
        },
      ],
    },
    output: {
      filename: "[hash].bundle.js",
      path: resolve("dist"),
      publicPath: "/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        inject: "body",
        template: join("src", "index.html"),
      }),
      new CleanWebpackPlugin(["dist"]),
    ],
    resolve: {
      extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"],
    },
  }
}

function getSpecificConfig(env: IWebpackEnv, baseConfig: webpack.Configuration): webpack.Configuration {
  return env === "prod" ? getProdConfig(baseConfig) : getDevConfig(baseConfig)
}

function getProdConfig(baseConfig: webpack.Configuration): webpack.Configuration {
  return {
    devtool: "source-map",
    module: {
      ...baseConfig.module,
      rules: [
        ...(baseConfig.module as any).rules,
        {
          exclude: /node_modules/,
          include: resolve(__dirname, "src"),
          loader: "awesome-typescript-loader",
          test: /\.(t|j)sx?$/,
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader",
          }),
        },
      ],
    },
    output: {
      ...baseConfig.output,
      filename: "assets/js/[name].[chunkhash].bundle.js",
    },
    plugins: [
      ...(baseConfig.plugins as webpack.Plugin[]),
      new ExtractTextPlugin("assets/css/[chunkhash].bundle.css"),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production"),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: {
          warnings: false,
        },
      }),
      new webpack.optimize.CommonsChunkPlugin({
        minChunks: module => {
          return module.context && module.context.indexOf("node_modules") !== -1
        },
        name: "vendor",
      }),
      new webpack.optimize.CommonsChunkPlugin({
        minChunks: Infinity,
        name: "manifest",
      }),
    ],
  }
}

function getDevConfig(baseConfig: webpack.Configuration): webpack.Configuration {
  return {
    devServer: {
      contentBase: resolve("dist"),
      hot: true,
      historyApiFallback: true,
      port: 3000,
      publicPath: "/",
      stats: {
        warnings: false,
      },
      overlay: true,
    },
    devtool: "inline-source-map",
    entry: ["react-hot-loader/patch", ...(baseConfig.entry as string[])],
    module: {
      ...baseConfig.module,
      rules: [
        ...(baseConfig.module as any).rules,
        {
          exclude: /node_modules/,
          include: resolve(__dirname, "src"),
          use: [
            "react-hot-loader/webpack",
            {
              loader: "awesome-typescript-loader",
              options: {
                configFileName: "tsconfig.dev.json",
              },
            },
          ],
          test: /\.(t|j)sx?$/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    output: {
      ...baseConfig.output,
      filename: "[name].[hash].bundle.js",
    },
    plugins: [
      ...(baseConfig.plugins as webpack.Plugin[]),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development"),
        },
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  }
}

export default getMergedConfig
