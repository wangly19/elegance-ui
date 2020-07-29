const devConfig = require('./config/dev')
const buildConfig = require('./config/build')

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig
