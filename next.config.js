const withPWA = require('next-pwa')
const isProd = process.env.NOFE_ENV === 'production'

module.export = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})