'use strict'
const Config = require('config')
const { invoiceValidations } = require('../validations')
const invoiceHandler = require('../handlers/invoice')

const API_PATH = Config.get('app.apiRoot')

const routes = []

/**
 *GET Get all invoices
 */
routes.push({
  path: API_PATH + '/invoices',
  method: 'GET',
  handler: invoiceHandler.getInvoicestByUserId,
  config: {
    tags: ['api', 'USER'],
    auth: {
      strategy: 'jwt'
    }
  }
})

/**
 *POST Creat new invoice
 */
routes.push({
  path: API_PATH + '/invoices',
  method: 'POST',
  handler: invoiceHandler.createInvoice,
  config: {
    tags: ['api', 'USER'],
    auth: {
      strategy: 'jwt'
    },
    validate: invoiceValidations.createInvoice
  }
})

module.exports = routes
