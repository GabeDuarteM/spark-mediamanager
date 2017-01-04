import AppProd from './App.prod'
import AppDev from './App.dev'

let App

if (process.env.NODE_ENV === 'production') {
  App = AppProd
} else {
  App = AppDev
}

export default App
