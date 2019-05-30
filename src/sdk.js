const SDK = require('parabox-sdk').default
const config = require('./config')
const sdk = SDK(config.chain)
module.exports = sdk