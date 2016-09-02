const Boom = require('boom')

const validate = function (decoded, request, callback) {
  // do your checks to see if the person is valid
  if (!people[decoded.id]) {
    return callback(null, false)
  }
  else {
    return callback(null, true)
  }
}

const register = function (server, options, next) {
  server.auth.strategy('jwt', 'jwt',
    { key: process.env.JWT_SECRET,          // Never Share your secret key
      validateFunc: validate,            // validate function defined above
      verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
    })
  server.auth.default('jwt')
  next()
}

register.attributes = {
  name: 'yarAuth',
  version: '1.0.0'
}

module.exports = register
