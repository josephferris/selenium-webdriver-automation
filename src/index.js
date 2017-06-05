import colors from 'colors'
import { Builder, flow, promise } from 'config/webdriver'
import { options, runFinishTime } from 'helpers'
import config from 'config/config'

import runSetupTask from './setup-task'
import runFinish from './finish'
import runTaskStatus from './task-status'

// Constants
const start = new Date()
const BROWSER = config.browser

const driver = new Builder()
  .forBrowser(`${BROWSER}`)
  .build()

export default function runScripts(driver) {
  promise.fulfilled().then(() => {
    flow.execute(() => runSetupTask(driver))
    flow.execute(() => console.log(''), console.log(colors.yellow(`   Starting automated task script...`)))
    flow.execute(() => runFinish(driver))
    flow.execute(() => runFinishTime(start))
    flow.execute(() => runTaskStatus())
    flow.execute(() => console.log(colors.yellow(`   Completed automated task script.`)), console.log(''))
  })
}

runScripts(driver)
