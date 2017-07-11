import webpack from "webpack"
import { join, resolve } from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import CleanWebpackPlugin from "clean-webpack-plugin"

function getMergedConfig({ env }) {
  const baseConfig = getBaseConfig()
  const specificConfig = getSpecificConfig(env, baseConfig)
  return { ...baseConfig, ...specificConfig }
}

function getBaseConfig() {
  return {
    entry: [resolve("src", "index.js")],
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.tpl.html",
        inject: "body",
        filename: "index.html"
      }),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    output: {
      path: join(__dirname, "build"),
      filename: "[hash].bundle.js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: join(__dirname, "src"),
          use: [
            {
              loader: "babel-loader",
              options: {
                babelrc: false,
                presets: [["es2015", { modules: false }], "react", "stage-0"],
                plugins: [
                  "react-hot-loader/babel",
                  "transform-decorators-legacy"
                ]
              }
            }
          ]
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
    }
  }
}

function getSpecificConfig(env, baseConfig) {
  return env === "prod" ? getProdConfig(baseConfig) : getDevConfig(baseConfig)
}

function getProdConfig(baseConfig) {
  return {
    devtool: "source-map",
    output: {
      ...baseConfig.output,
      filename: "assets/js/[name].[chunkhash].bundle.js"
    },
    plugins: [
      ...baseConfig.plugins,
      new ExtractTextPlugin("assets/css/[chunkhash].bundle.css"),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: true,
          screw_ie8: true
        },
        comments: false,
        compress: true
      }),
      new CleanWebpackPlugin(["build"]),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function(module) {
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
        ...baseConfig.module.rules,
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

function getDevConfig(baseConfig) {
  return {
    devtool: "cheap-eval-source-map",
    entry: ["react-hot-loader/patch", ...baseConfig.entry],
    output: {
      ...baseConfig.output,
      filename: "[name].[hash].bundle.js"
    },
    plugins: [
      ...baseConfig.plugins,
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
      contentBase: resolve(__dirname, "build"),
      publicPath: "/"
    },
    module: {
      ...baseConfig.module,
      rules: [
        ...baseConfig.module.rules,
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  }
}

export default getMergedConfig
