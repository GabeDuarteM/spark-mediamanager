import { transformConsoleMessagesToExceptions } from "../utils/testUtils"

describe("store", () => {
  beforeEach(() => {
    jest.resetModules()
    transformConsoleMessagesToExceptions()
  })
  it("should use devtools if on development mode", () => {
    const NODE_ENV_BACKUP = process.env.NODE_ENV
    process.env.NODE_ENV = "development"
    // tslint:disable-next-line:no-string-literal
    window["__REDUX_DEVTOOLS_EXTENSION__"] = jest.fn()
    const configureStoreDev = require("./store").default

    configureStoreDev()
    // tslint:disable-next-line:no-string-literal
    expect(window["__REDUX_DEVTOOLS_EXTENSION__"]).toHaveBeenCalledTimes(1)
    process.env.NODE_ENV = NODE_ENV_BACKUP
  })

  it("should not use devtools if on production mode", () => {
    const NODE_ENV_BACKUP = process.env.NODE_ENV
    process.env.NODE_ENV = "production"
    // tslint:disable-next-line:no-string-literal
    window["__REDUX_DEVTOOLS_EXTENSION__"] = jest.fn()
    const configureStoreDev = require("./store").default

    configureStoreDev()
    // tslint:disable-next-line:no-string-literal
    expect(window["__REDUX_DEVTOOLS_EXTENSION__"]).toHaveBeenCalledTimes(0)
    process.env.NODE_ENV = NODE_ENV_BACKUP
  })
})
