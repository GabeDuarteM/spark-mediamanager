const { app, BrowserWindow, Menu } = require('electron')

let win

if (process.env.NODE_ENV === 'development') {
  require('electron-debug')()
}

async function installExtensions () {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer')

    const extensions = [
      'REACT_DEVELOPER_TOOLS',
      'REDUX_DEVTOOLS'
    ]

    const forceDownload = !!process.env.UPGRADE_EXTENSIONS
    for (const name of extensions) {
      try {
        await installer.default(installer[name], forceDownload)
      } catch (e) {
        throw e
      }
    }
  }
}

async function createWindow () {
  await installExtensions()
  win = new BrowserWindow({ width: 1024, height: 728 })

  win.loadURL('http://localhost:3000/')
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })

  win.webContents.on('did-finish-load', () => {
    win.focus()
  })

  if (process.env.NODE_ENV === 'development') {
    win.openDevTools()
    win.webContents.on('context-menu', (e, props) => {
      const { x, y } = props

      Menu.buildFromTemplate([{
        label: 'Inspect element',
        click () {
          win.inspectElement(x, y)
        }
      }]).popup(win)
    })
  }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
