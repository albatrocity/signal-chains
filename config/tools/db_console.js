// https://gist.github.com/nnarhinen/52d1744ca881172729de

const repl      = require('repl'),
  promisify = require('repl-promised').promisify,
  server    = require('../../server')

module.exports = function() {
  repl.start({}),
  repl.context.models = server.plugins.bookshelf.model
  promisify(repl)
}
