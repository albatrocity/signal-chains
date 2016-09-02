const namespace = require('hapi-namespace')

module.exports = namespace('/api', [].concat(
  require('./gear')
))
