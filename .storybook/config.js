import { configure } from "@storybook/react"

function loadStories() {
  const req = require.context("../src/components", true, /\.stories\.js$/)
  req.keys().forEach(path => req(path))
}

configure(loadStories, module)
