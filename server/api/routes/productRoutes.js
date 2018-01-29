'use strict'
const Config = require('config')
const { productValidations } = require('../validations')
const productHandler = require('../handlers/product')

const API_PATH = Config.get('app.apiRoot')

const routes = []

/**
 *POST Add new product
 */
routes.push({
  path: API_PATH + '/product',
  method: 'PUT',
  handler: productHandler.newProduct,
  config: {
    tags: ['api', 'USER'],
    auth: {
      strategy: 'jwt'
    },
    validate: productValidations.newProduct
  }
})

module.exports = routes
