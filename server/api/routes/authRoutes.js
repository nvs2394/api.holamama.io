'use strict'
const Config = require('config')
const { authValidations } = require('../validations')
const authHandler = require('../handlers/auth')

const API_PATH = Config.get('app.apiRoot')

const routes = []

/**
 * Login route
 */
routes.push({
  path: API_PATH + '/login',
  method: 'GET',
  handler: authHandler.facebookSignin,
  config: {
    tags: ['api', 'auth'],
    validate: authValidations.logIn,
    plugins: {
      'hapi-swagger': {
        produces: ['application/json', 'application/xml'],
        consumes: ['application/json', 'application/xml']
      }
    }
  }
})

module.exports = routes
