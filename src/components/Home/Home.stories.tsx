import * as React from "react"

import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"

import ContainerWrapper from "../../../.storybook/ContainerWrapper"
import Home from "./Home"

const Component = (
  <Home
    handleTabChange={(evt: any, index: number) => action(`Changed the tab to ${index}`)}
    selectedTabIndex={0}
    changeRouteAdd={() => action(`Changed the route to add`)}
  />
)

storiesOf("Home", module)
  .add("dark theme", () =>
    <ContainerWrapper>
      {Component}
    </ContainerWrapper>
  )
  .add("light theme", () =>
    <ContainerWrapper type="light">
      {Component}
    </ContainerWrapper>
  )
