'use strict'
const Config = require('config')
const { userValidations } = require('../validations')
const userHandler = require('../handlers/user')
const productHandler = require('../handlers/product')

const API_PATH = Config.get('app.apiRoot')

const routes = []

/**
 *GET Get user profile
 */
routes.push({
  path: API_PATH + '/users/profiles',
  method: 'GET',
  handler: userHandler.getProfileByToken,
  config: {
    tags: ['api', 'user'],
    auth: {
      strategy: 'jwt'
    }
  }
})

/**
 *PUT Update company info
 */
routes.push({
  path: API_PATH + '/users/companys',
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

/**
 *GET Get all product with userId on access_token
 */
routes.push({
  path: API_PATH + '/users/products',
  method: 'GET',
  handler: productHandler.getAllProductByUserId,
  config: {
    tags: ['api', 'user'],
    auth: {
      strategy: 'jwt'
    }
  }
})

module.exports = routes
