
let manifest = {
  connections: [
    {
      host: '0.0.0.0',
      port: process.env.PORT || 3000,
      labels: ['web']
    }
  ],
  registrations: [
    { plugin: './config/plugins/swaggerPlugin' },
    { plugin: 'hapi-auth-jwt2'},
    { plugin: './config/plugins/authPlugin'},
    {
      plugin: {
        register: 'hapi-bookshelf-models',
        options: {
          knex: require('./knexfile')[process.env.NODE_ENV || 'development'],
          plugins: ['registry', 'pagination'], // Required
          models: `${__dirname}/models`,
          base: function (bookshelf) {
            return bookshelf.Model.extend({
              hasTimestamps: true
            })
          }
        }
      }
    },
    { plugin: 'hapi-bookshelf-serializer'}
  ]
}

if (process.env.NODE_ENV !== 'test') {
  manifest.registrations.push(
    {
      plugin: {
        register: 'good',
        options: {
          reporters: {
            console: [{
              module: 'good-squeeze',
              name: 'Squeeze',
              args: [{
                response: '*',
                log: '*'
              }]
            }, {module: 'good-console'}, 'stdout']
          }
        }
      }
    }
  )
}

module.exports = manifest
