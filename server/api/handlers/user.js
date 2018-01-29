'use strict'

const httpStatus = require('http-status')
const userController = require('../controllers/userController')
const { responseSuccess, responseError } = require('../../helpers/reponseHelper')
const code = require('../../utils/code')
const message = require('../../utils/message')

const getProfileByToken = async (req, reply) => {
  const { userId = {} } = req.auth.credentials
  try {
    if (userId) {
      const user = await userController.getUserByUserId(userId)
      if (user) {
        return reply(responseSuccess(httpStatus.OK, httpStatus[200], user))
      }

      return responseError(code.USER_NOT_FOUND, message.USER_NOT_FOUND)
    }
    return responseError(code.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR)

  } catch (error) {
    return responseError(code.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR, error.message)
  }
}

const updateCompanyInfo = async (req, reply) => {
  const { userId = {} } = req.auth.credentials
  const companyInfo = req.payload

  if (companyInfo) {
    try {
      const companyInfoUpdated = await userController.updateCompanyInfo(userId, companyInfo)
      if (companyInfoUpdated) {
        return reply(responseSuccess(httpStatus.OK, httpStatus[200], companyInfoUpdated))
      }
      return responseError(code.CAN_NOT_UPDATE, message.CAN_NOT_UPDATE)
    } catch (error) {
      return responseError(code.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR, error.message)
    }
  }

  return responseError(code.CAN_NOT_UPDATE, message.CAN_NOT_UPDATE)
}

module.exports = {
  getProfileByToken,
  updateCompanyInfo
}
