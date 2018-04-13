'use strict'

const joi = require('joi')

const productValidations = {
  create: {
    headers: {},
    payload: {
      vocabulary: joi.string().required().trim().description('Vocabulary'),
      mp3Url: joi.string().required().trim().description('Mp3 url of vocabulary'),
      imageUrl: joi.string().required().trim().description('Icon url of vocabulary'),
      explain: joi.string().required().trim().description('Explain of vocabulary'),
      example: joi.string().required().trim().description('Example about vocabulary'),
      translate: joi.string().required().trim().description('Translation to vietnamese'),
      category: joi.string().required().trim().description('Category id')
    },
    options: {
      allowUnknown: true
    }
  }
}

module.exports = productValidations
