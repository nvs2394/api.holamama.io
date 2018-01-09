'use strict'

const joi = require('joi')

const userValidations = {

  /**
   *GET /getUserByUserId
   */
  getUserByUserId: {
    headers: {},
    params: {
      id: joi.string().trim().required().description('Id of user you want to fetch')
    },
    options: {
      allowUnknown: true
    }
  }
}

module.exports = userValidations
