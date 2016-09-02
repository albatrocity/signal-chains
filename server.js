// Entry point for the whole app. Uses Glue (https://github.com/hapijs/glue) to
// compose a server from a manifest file instead of cobbling one together with
// a bunch of registrations and config hooks. If you want to extend server
// functionality, write a plugin. It's easy and...fun.

const Glue        = require('glue')
const manifest    = require('./manifest')

if (process.env.NODE_ENV == 'test'  || process.env.NODE_ENV == 'development') {
  require('dotenv').config()
}

Glue.compose(manifest, {
  relativeTo: __dirname
}).then((server) => {
  server.start(() => {
    console.log('info', 'Server running at: ' + server.info.uri)
  })
}).catch((err) => {
  console.log(err)
  throw err
})
