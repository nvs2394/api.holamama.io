'use strict'

const joi = require('joi')

const userValidations = {

  /**
   *GET /getUserByUserId
   */
  updateCompanyInfo: {
    headers: {},
    payload: {
      name: joi.string().trim().description('Name of your company'),
      phoneNumber: joi.string().trim().description('Phone number of your company'),
      website: joi.string().trim().description('URL website  of your company'),
      address: joi.string().trim().description('Address of your company'),
      email: joi.string().trim().description('Email address of your company')
    },
    options: {
      allowUnknown: true
    }
  }
}

module.exports = userValidations
