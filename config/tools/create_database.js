var conn = {
  host     : process.env.DATABASE_URL || '127.0.0.1',
  charset  : 'utf8'
}

// connect without database selected
const knex = require('knex')({ client: 'postgres', connection: conn})
const knexConfig = require('../../knexfile')

module.exports = function() {
  let env = process.env.NODE_ENV || 'development'
  return knex
  .raw(`CREATE DATABASE ${knexConfig[env].connection.database}`)
  .then(() => {knex.destroy(); console.log(`${env} database created`)})
  .catch((err) => console.error(err))
}
