'use strict'
const Config = require('config')
const { vocabularyValidations } = require('../validations')
const vocabularyHandler = require('../handlers/vocabulary')

const API_PATH = Config.get('app.apiRoot')

const routes = []

/**
 *POST add new vocabulary
 */
routes.push({
  path: API_PATH + '/vocabularys',
  method: 'POST',
  handler: vocabularyHandler.create,
  config: {
    tags: ['api', 'vocabularys'],
    auth: {
      strategy: 'jwt'
    },
    validate: vocabularyValidations.create
  }
})

routes.push({
  path: API_PATH + '/vocabularys',
  method: 'GET',
  handler: vocabularyHandler.getList,
  config: {
    tags: ['api', 'vocabularys'],
    auth: {
      strategy: 'jwt'
    }
  }
})

routes.push({
  path: API_PATH + '/vocabularys/{id}',
  method: 'GET',
  handler: vocabularyHandler.getById,
  config: {
    tags: ['api', 'vocabularys'],
    auth: {
      strategy: 'jwt'
    }
  }
})

routes.push({
  path: API_PATH + '/vocabularys',
  method: 'PUT',
  handler: vocabularyHandler.update,
  config: {
    tags: ['api', 'vocabularys'],
    auth: {
      strategy: 'jwt'
    },
    validate: vocabularyValidations.newVocabulary
  }
})

module.exports = routes
