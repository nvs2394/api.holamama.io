'use strict'

const joi = require('joi')

const productValidations = {

  /**
   *GET /getUserByUserId
   */
  newProduct: {
    headers: {},
    payload: {
      name: joi.string().required().trim().description('Name product'),
      price: joi.number().required().description('Price product')
    },
    options: {
      allowUnknown: true
    }
  }
}

module.exports = productValidations
