
const privateKey = require('../truffle').networks.development.privateKey
let config = {
    chain: 'http://47.92.173.78:1337',
    address: '0xa7d8fb85e177482a54ae2a2da891b87577adc1e9',
    privateKey
}

module.exports = config
