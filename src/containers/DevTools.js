import React from 'react'
import DevToolsComponent from '../components/DevTools'

// HOW TO USE:
// A) If running in server-mode (without electron)
//
// To toggle visibility: Press CTRL-Y
// To toggle dock location: Press CTRL-Q
// To toggle monitor: Press CTRL-M
//
// B) If not running in server-mode (with electron)
// Just open the dev tools, there will be a tab there called Redux. A more robust Redux DevTools will be present there

function CompleteDevTools () {
  return <DevToolsComponent />
}

function BlankDevTools () {
  return <div />
}

function DevTools (props) {
  const isElectron = !!(window && window.process && window.process.type)
  if (isElectron) {
    return <BlankDevTools />
  }
  return <CompleteDevTools />
}

export default DevTools
