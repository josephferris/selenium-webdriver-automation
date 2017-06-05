import webdriver, { until } from 'selenium-webdriver'

export default function closeBrowser(driver) {
  return driver.wait(driver.quit()), 50000
}
