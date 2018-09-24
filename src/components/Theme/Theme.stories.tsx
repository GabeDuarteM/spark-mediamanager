// import React from "react"

// import { storiesOf } from "@storybook/react"
// import Button from "material-ui/Button"
// import Paper from "material-ui/Paper"

// import Theme from "./Theme"

// const StoryWrapper: React.StatelessComponent<{}> = ({ children }) => (
//   <div
//     className="storyWrapper"
//     style={{
//       display: "flex",
//       height: "calc(100vh - 16px)",
//       width: "100%",
//     }}
//   >
//     <div
//       className="storyWrapper"
//       style={{
//         margin: "auto",
//         display: "flex",
//         height: "calc(100vh - 16px)",
//         width: "100%",
//       }}
//     >
//       {children}
//     </div>
//   </div>
// )

// const ThemeDemo: React.StatelessComponent<{}> = () => (
//   <Paper
//     style={{
//       margin: "auto",
//       display: "flex",
//       height: "calc(100vh - 16px)",
//       width: "100%",
//     }}
//   >
//     <div
//       style={{
//         margin: "auto",
//         display: "flex",
//         flexWrap: "wrap",
//       }}
//     >
//       <Button
//         style={{
//           height: 36,
//         }}
//       >
//         demo
//       </Button>
//     </div>
//   </Paper>
// )

// storiesOf("Theme", module)
//   .add("dark", () => (
//     <StoryWrapper>
//       <Theme type="dark">
//         <ThemeDemo />
//       </Theme>
//     </StoryWrapper>
//   ))
//   .add("light", () => (
//     <StoryWrapper>
//       <Theme type="light">
//         <ThemeDemo />
//       </Theme>
//     </StoryWrapper>
//   ))
