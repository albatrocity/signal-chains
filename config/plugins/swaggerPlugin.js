// Config Wrapper for the hapi-swagger plugin

const swaggerOpts = {
  info: {
    title: 'Signal Chains API Documentation',
    version: '1.0.0'
  },
  auth: false,
  // tags: [
  //   {name: 'taggings', description: 'Tagging operations'}
  // ]
}


const register = function (server, options, next) {
  // server.register({
  //   register: require('hapi-swagger'),
  //   options: swaggerOpts
  // }, (err) => {
  //   if (err) { throw new Error(err) }
  // })
  return next()

}

register.attributes = {
  name: 'signalChainsSwagger',
  version: '1.0.0'
}

module.exports = register
