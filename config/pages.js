import colors from 'colors'

const user = 'joey@joeyferris.io'
const password = process.env.PASSWORD
const host = 'joeyferris.io'

const environment = process.env.NODE_ENV

if (process.env.NODE_ENV === 'production') {
  var url = 'https://' + host
} else {
  var url = 'https://' + host
}

export default {
  home: `${url}` + '/',
  about: `${url}` + '/about',
  contact: `${url}` + '/contact',
  portfolio: `${url}` + '/portfolio',
}
