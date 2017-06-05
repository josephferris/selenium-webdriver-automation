'use strict'

const rootPath = process.cwd()
import webdriver, { Builder, By, logging, promise, until } from 'selenium-webdriver'
import proxy from 'selenium-webdriver/proxy'
import testing, { after, afterEach, before, beforeEach, describe, it } from 'selenium-webdriver/testing'
import chrome from 'selenium-webdriver/chrome'
import phantomjs from 'selenium-webdriver/phantomjs'
import config from './config'

const DEFAULT_TIMEOUT = 10000

webdriver.WebDriver.prototype.waitForElement = function(locator, timeout) {
	var timeout = timeout || DEFAULT_TIMEOUT
	return this.wait(until.elementLocated(locator), timeout)
}

webdriver.WebDriver.prototype.waitForVisibleElement = function(locator, timeout) {
	var timeout = timeout || DEFAULT_TIMEOUT
	const element = this.wait( until.elementLocated(locator), timeout)
	return this.wait(new until.WebElementCondition(`for element to be visible ${locator}`, () => {
		return element.isDisplayed().then(v => v ? element : null)
	}), timeout)
}

const waitForElement = webdriver.waitForElement
const waitForVisibleElement = webdriver.waitForVisibleElement
const flow = promise.controlFlow()

const BROWSER = config.browser
const SELENIUM_SERVER = `http://0.0.0.0:4444/wd/hub`

const Capabilities = webdriver.Capabilities.phantomjs()

//build custom phantomJS driver
const phantomjs_exe = require('phantomjs-prebuilt').path
const customPhantom = webdriver.Capabilities.phantomjs()
customPhantom.set('phantomjs.binary.path', phantomjs_exe)

export {
	after,
	afterEach,
	before,
	beforeEach,
	Builder,
	By,
  Capabilities,
  chrome,
	describe,
	flow,
	it,
	promise,
	testing,
	until,
	waitForElement,
	waitForVisibleElement,
}
