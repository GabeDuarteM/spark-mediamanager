var genDefaultConfig = require("@storybook/react/dist/server/config/defaults/webpack.config.js")

module.exports = function(config, env) {
  var config = genDefaultConfig(config, env)

  config.module.rules.push({
    test: /\.tsx$/,
    loader: "awesome-typescript-loader",
  })
  config.module.rules.push({
    test: /\.ts$/,
    loader: "awesome-typescript-loader",
  })
  config.resolve.extensions.push(".tsx")
  config.resolve.extensions.push(".ts")

  return config
}
