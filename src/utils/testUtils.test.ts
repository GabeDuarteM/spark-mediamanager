import { transformConsoleMessagesToExceptions } from "./testUtils"

describe("testUtils", () => {
  describe("transformConsoleMessagesToExceptions", () => {
    beforeEach(() => transformConsoleMessagesToExceptions())

    it("should throw if console.warn is called", () => {
      // tslint:disable-next-line no-console
      expect(() => console.warn("should throw")).toThrow("should throw")
    })

    it("should throw if console.error is called", () => {
      // tslint:disable-next-line no-console
      expect(() => console.error("should throw")).toThrow("should throw")
    })
  })
})
