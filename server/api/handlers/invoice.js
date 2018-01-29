'use strict'

const httpStatus = require('http-status')
const productCtrl = require('../controllers/productController')
const { responseSuccess, responseError } = require('../../helpers/reponseHelper')
const code = require('../../utils/code')
const message = require('../../utils/message')

const createInvoice = async (req, reply) => {
  const { userId = {} } = req.auth.credentials
  const product = {
    ...req.payload,
    userId
  }

  try {
    const newProduct = await productCtrl.newProduct(product)
    if (newProduct) {
      return reply(responseSuccess(httpStatus.OK, httpStatus[200], newProduct))
    }
    return responseError(code.CAN_NOT_CREATE, message.CAN_NOT_CREATE)
  } catch (error) {
    return responseError(code.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR, error.message)
  }

}

const getInvoicestByUserId = async (req, reply) => {
  const { userId = {} } = req.auth.credentials
  try {
    const products = await productCtrl.getProductsByUserId(userId)
    return reply(responseSuccess(httpStatus.OK, httpStatus[200], products))
  } catch (error) {
    return responseError(code.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR, error.message)
  }
}

module.exports = {
  createInvoice,
  getInvoicestByUserId
}
