'use strict'

const joi = require('joi')

const invoiceValidations = {

  /**
   *GET /getUserByUserId
   */
  createInvoice: {
    headers: {},
    payload: {
      clientId: joi.string().trim().description('Client Id'),
      templateId: joi.string().trim().description('Template Id'),
      orderId: joi.string().trim().description('Order Id')
    },
    options: {
      allowUnknown: true
    }
  }
}

module.exports = invoiceValidations
