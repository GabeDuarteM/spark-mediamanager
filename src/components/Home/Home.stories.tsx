import * as React from "react"

import { action } from "@storybook/addon-actions"
import { storiesOf } from "@storybook/react"
import { MemoryRouter } from "react-router"

import ContainerWrapper from "../../../.storybook/ContainerWrapper"
import Home from "./Home"

storiesOf("Home", module)
  .addDecorator(story =>
    <MemoryRouter initialEntries={["/series", "/movies", "/animes"]} initialIndex={1}>
      {story()}
    </MemoryRouter>
  )
  .add("dark theme", () =>
    <ContainerWrapper>
      <Home handleTabRoute={(videoType, history) => action(`Changed the filter to ${videoType}`)} />
    </ContainerWrapper>
  )
  .add("light theme", () =>
    <ContainerWrapper type="light">
      <Home handleTabRoute={(videoType, history) => action(`Changed the filter to ${videoType}`)} />
    </ContainerWrapper>
  )
