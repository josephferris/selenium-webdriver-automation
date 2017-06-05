import webdriver, { until } from 'selenium-webdriver'

export default function handleFailure(err) {
  console.error('Something went wrong\n', err.stack, '\n')
  driver.quit()
}
