const knexCleaner = require('knex-cleaner')

const Glue = require('glue')
const manifest = require('../manifest')

module.exports = function() {
  return Glue.compose(manifest, {
    relativeTo: `${__dirname}/../`
  }, (err, server) => {
    return knexCleaner.clean(server.plugins.bookshelf.knex).then(() => {
      console.log('database cleaned!')
    })
  })
}()
