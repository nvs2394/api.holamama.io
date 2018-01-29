'use strict'

const httpStatus = require('http-status')
const invoiceCtrl = require('../controllers/invoiceController')
const { responseSuccess, responseError } = require('../../helpers/reponseHelper')
const code = require('../../utils/code')
const message = require('../../utils/message')

const createInvoice = async (req, reply) => {
  const { userId = {} } = req.auth.credentials
  const { products, clientId, templateId } = req.payload

  try {
    const newInvoice = await invoiceCtrl.createInvoice({ userId, clientId, products, templateId })
    if (newInvoice) {
      return reply(responseSuccess(httpStatus.OK, httpStatus[200], newInvoice))
    }
    return responseError(code.CAN_NOT_CREATE, message.CAN_NOT_CREATE)
  } catch (error) {
    return responseError(code.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR, error.message)
  }

}

// const getInvoicestByUserId = async (req, reply) => {
//   const { userId = {} } = req.auth.credentials
//   try {
//     const products = await invoiceCtrl.getProductsByUserId(userId)
//     return reply(responseSuccess(httpStatus.OK, httpStatus[200], products))
//   } catch (error) {
//     return responseError(code.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR, error.message)
//   }
// }

module.exports = {
  createInvoice
  // getInvoicestByUserId
}
