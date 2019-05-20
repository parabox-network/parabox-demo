const SDK = require('parabox').default
const config = require('./config')
const sdk = SDK(config.chain)
module.exports = sdk