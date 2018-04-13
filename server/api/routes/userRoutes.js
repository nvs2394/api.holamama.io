'use strict'
const Config = require('config')
const { userValidations } = require('../validations')
const userHandler = require('../handlers/user')

const API_PATH = Config.get('app.apiRoot')

const routes = []

routes.push({
  path: API_PATH + '/users',
  method: 'GET',
  handler: userHandler.getProfileByToken,
  config: {
    tags: ['api', 'user'],
    auth: {
      strategy: 'jwt'
    }
  }
})

routes.push({
  path: API_PATH + '/users/{id}',
  method: 'GET',
  handler: userHandler.getProfileByToken,
  config: {
    tags: ['api', 'user'],
    auth: {
      strategy: 'jwt'
    }
  }
})

routes.push({
  path: API_PATH + '/users',
  method: 'PUT',
  handler: userHandler.updateCompanyInfo,
  config: {
    tags: ['api', 'user'],
    auth: {
      strategy: 'jwt'
    },
    validate: userValidations.updateCompanyInfo
  }
})

module.exports = routes
