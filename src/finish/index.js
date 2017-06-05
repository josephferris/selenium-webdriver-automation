import { flow, promise } from 'config/webdriver'

export default function runFinish(driver) {
  promise.fulfilled().then(() => {
    flow.execute(() => driver.quit())
    // flow.execute(() => driver.close() && driver.quit())
  })
}
