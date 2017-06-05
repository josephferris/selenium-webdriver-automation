import fs from 'fs'
import colors from 'colors'
import mkdirp from 'mkdirp'
import rmdir from 'rmdir'
import { flow } from 'config/webdriver'

export function createDirectory() {
  console.log(colors.yellow(`   Creating screenshots directory...`))
  mkdirp(`screenshots`)
}

export function removeDirectory() {
  flow.execute(function* () {
    // flow.execute(() => console.log(colors.blue(`  1. Removing old screenshots...`)))
    flow.execute(() => {
      console.log(colors.blue(`    1. Removing old screenshots...`))
      rmdir('./screenshots', function (err, dirs, files) {
        if (err) return console.log(colors.red('    err', err))
        mkdirp(`screenshots`)
      })
      console.log(colors.blue('    2. All files are removed'))
      console.log(colors.blue(`    3. Creating screenshots directory...`))
    })
  })
}

export default function runSetupTask() {
  flow.execute(function* () {
    flow.execute(() => console.log(colors.yellow(`   Running setup before executing automated tasks...`)))
    // flow.execute(() => removeDirectory())
    flow.execute(() => createDirectory())
  })
}
