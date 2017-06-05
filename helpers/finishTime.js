import colors from 'colors'

// Constants
const start = new Date()

export default function runFinishTime() {
  console.log(colors.green(`   Finished`) + ` after` + colors.red(` ${new Date().getTime() - start.getTime()}ms`))
}
