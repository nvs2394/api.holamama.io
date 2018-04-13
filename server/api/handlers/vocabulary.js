'use strict'

const httpStatus = require('http-status')
const vocabularyCtrl = require('../controllers/vocabularyController')
const { responseSuccess, responseError } = require('../../helpers/reponseHelper')
const code = require('../../utils/code')
const message = require('../../utils/message')

const create = async (req, reply) => {
  const { userId = {} } = req.auth.credentials
  const params = {
    ...req.payload,
    userId
  }

  try {
    const vocabulary = await vocabularyCtrl.create(params)
    if (vocabulary) {
      return reply(responseSuccess(httpStatus.OK, httpStatus[200], vocabulary))
    }
    return responseError(code.CAN_NOT_CREATE, message.CAN_NOT_CREATE)
  } catch (error) {
    return responseError(code.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR, error.message)
  }

}

const getById = async (req, reply) => {
  const { id = {} } = req.auth.credentials
  try {
    const vocabulary = await vocabularyCtrl.getById(id)
    return reply(responseSuccess(httpStatus.OK, httpStatus[200], vocabulary))
  } catch (error) {
    return responseError(code.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR, error.message)
  }
}

const getList = async (req, reply) => {
  const { userId = {} } = req.auth.credentials
  try {
    const vocabularys = await vocabularyCtrl.getListByUserId(userId)
    return reply(responseSuccess(httpStatus.OK, httpStatus[200], vocabularys))
  } catch (error) {
    return responseError(code.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR, error.message)
  }
}

const update = async (req, reply) => {

}

module.exports = {
  create,
  getById,
  getList,
  update
}
