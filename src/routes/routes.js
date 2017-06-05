import webdriver, { By, until } from 'selenium-webdriver'
import pages from 'config/pages'

// Home route
export function homeRoute(driver) {
  return driver.get(pages.home)
}

// About route
export function aboutRoute(driver) {
  return driver.get(pages.about)
}

// Contact route
export function contactRoute(driver) {
  return driver.get(pages.contact)
}

// Portfolio route
export function portfolioRoute(driver) {
  return driver.get(pages.portfolio)
}
