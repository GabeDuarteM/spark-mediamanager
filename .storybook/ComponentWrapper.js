import React from "react"

const ComponentWrapper = ({ children }) =>
  <div
    className="ComponentWrapper"
    style={{
      display: "flex",
      height: "100vh",
      userSelect: "none"
    }}
  >
    <div className="ComponentWrapper" style={{ margin: "auto" }}>
      {children}
    </div>
  </div>

export default ComponentWrapper
