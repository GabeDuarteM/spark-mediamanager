import React from 'react'
import { createDevTools } from 'redux-devtools'

import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonitor from 'redux-slider-monitor'

// HOW TO USE:
// To toggle visibility: Press CTRL-Y
// To toggle dock location: Press CTRL-Q
// To toggle monitor: Press CTRL-M

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-y'
    changePositionKey='ctrl-q'
    changeMonitorKey='ctrl-m'
    defaultIsVisible={false}>
    <LogMonitor theme='tomorrow' />
    <SliderMonitor keyboardEnabled />
  </DockMonitor>
)

export default DevTools
