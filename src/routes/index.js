import { flow, promise } from 'config/webdriver'
import { closeBrowser } from 'helpers'

import { homeRoute, aboutRoute, contactRoute, portfolioRoute } from './routes'

export default async function runRoutes(driver) {
  promise.fulfilled().then(() => {
    flow.execute(() => homeRoute(driver))
    flow.execute(() => aboutRoute(driver))
    flow.execute(() => contactRoute(driver))
    flow.execute(() => portfolioRoute(driver))
  })
}
