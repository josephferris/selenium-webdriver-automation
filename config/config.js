'use strict'

import setup from './setup.json'

export default {
  baseUrl: setup.baseUrl,
  browser: setup.browser,
  rootPath: process.cwd(),
  login: {
    email: setup.email,
    emailField: 'Email',
    password: setup.password,
    passwordField: 'Password',
    loginButton: 'buttonLogin',
  }
}
