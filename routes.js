'use strict'

const glob = require('glob')
const path = require('path')
const _ = require('lodash')
const fs = require('fs')

/**
 *Bootstrap models mongoose
 */
fs.readdirSync('./server/models').forEach((file) => {
  if (~file.indexOf('.js')) {
    require('./server/models/' + file)
  }
})

// add ping route by default for health check
const routes = [{
  method: 'GET',
  path: '/ping',
  handler: function (request, reply) {
    return reply({
      api_version: '1.0.0',
      contact: 'contact@holamama.co'
    })
  },
  config: {
    tags: ['api', 'app']
  }
}]

// add all routes from all modules to the routes array manually or write your routes inside a folder inside the server folder
// with suffix as Routes.js e.g weatherRoutes.js
glob.sync('./server/api/routes/*Routes.js').forEach((file) => {
  routes.push(require(path.resolve(file)))
})

// export routes
module.exports = _.flattenDeep(routes)
