'use strict'

const joi = require('joi')

const productValidations = {

  /**
   *GET /getUserByUserId
   */
  newOrder: {
    headers: {},
    payload: joi.array().items(
      joi.object({
        name: joi.string().required().trim().description('Name product'),
        price: joi.number().required().description('Price product'),
        discount: joi.number().required().description('Discount %')
      })
    ),
    options: {
      allowUnknown: true
    }
  }
}

module.exports = productValidations
