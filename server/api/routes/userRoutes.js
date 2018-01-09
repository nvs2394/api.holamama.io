'use strict'
const Config = require('config')
const { userValidations } = require('../validations')
const userHandler = require('../handlers/user')

const API_PATH = Config.get('app.apiRoot')

const routes = []

/**
 *GET /user/profile
 */
routes.push({
  path: API_PATH + '/user/profile',
  method: 'GET',
  handler: userHandler.getProfileByUserId,
  config: {
    tags: ['api', 'USER'],
    auth: {
      strategy: 'jwt'
    }
  }
})

/**
 *GET /user/setting
 */
routes.push({
  path: API_PATH + '/user/setting',
  method: 'GET',
  handler: userHandler.getProfileByUserId,
  config: {
    tags: ['api', 'USER'],
    auth: {
      strategy: 'jwt'
    }
  }
})

module.exports = routes
