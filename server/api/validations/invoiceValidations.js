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
      products: joi.array().items(
        joi.object({
          productId: joi.string().trim().description('Product Id'),
          quantity: joi.number().description('Quantity of this product')
        })
      ),
      discount: joi.number().description('Discount percent')
    },
    options: {
      allowUnknown: true
    }
  }
}

module.exports = invoiceValidations
