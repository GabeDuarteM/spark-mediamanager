import * as HtmlWebpackPlugin from "html-webpack-plugin"
import { join, resolve } from "path"
import TsCheckerWebpackPlugin from "ts-checker-webpack-plugin"
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
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        inject: "body",
        template: join("src", "index.html"),
      }),
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
    module: {
      ...baseConfig.module,
      rules: [
        ...(baseConfig.module as any).rules,
        {
          include: resolve(__dirname, "src"),
          use: [
            {
              loader: "cache-loader",
              options: {
                cacheDirectory: resolve(__dirname, "node_modules", ".cache-loader"),
              },
            },
            {
              loader: "thread-loader",
            },
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                happyPackMode: true,
              },
            },
          ],
          test: /\.(t|j)sx?$/,
        },
      ],
    },
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
    entry: [...(baseConfig.entry as string[])],
    module: {
      ...baseConfig.module,
      rules: [
        ...(baseConfig.module as any).rules,
        {
          include: resolve(__dirname, "src"),
          use: [
            {
              loader: "cache-loader",
              options: {
                cacheDirectory: resolve(__dirname, "node_modules", ".cache-loader"),
              },
            },
            {
              loader: "thread-loader",
            },
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                happyPackMode: true,
              },
            },
          ],
          test: /\.(t|j)sx?$/,
        },
      ],
    },
    output: {
      ...baseConfig.output,
      filename: "[name].bundle.js",
    },
    plugins: [
      ...(baseConfig.plugins as webpack.Plugin[]),
      new TsCheckerWebpackPlugin({
        tsconfig: resolve("tsconfig.json"),
        diagnosticFormatter: "ts-loader",
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
  }
}

export default getMergedConfig
