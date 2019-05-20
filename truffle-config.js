const privateKey = require('./truffle').networks.development.privateKey

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration! 
  // in windows env you should delete truffle.js, or you would get error
  compilers: {
    solc: {
      version: "0.4.24", // A version or constraint - Ex. "^0.5.0"
      settings: {
        optimizer: {
          enabled: true,
          // runs: <number>   // Optimize for how many times you intend to run the code
        }
      }
    }
  },
  networks: {
    development: {
      host: '47.92.173.78', // your host
      port: 1337,
      network_id: '*',
      privateKey,
      quota: 953000,
      version: 1
    },
  },
}