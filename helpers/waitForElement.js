import webdriver, { timeout, until } from 'selenium-webdriver'

const DEFAULT_TIMEOUT = 10000

webdriver.WebDriver.prototype.waitForElement = function (locator, timeout) {
  var timeout = timeout || DEFAULT_TIMEOUT
  return this.wait(until.elementLocated(locator), timeout)
}

const waitForElement = webdriver.waitForElement

export default waitForElement
