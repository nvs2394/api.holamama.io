'use strict'
const mongoose = require('mongoose')
const Invoice = mongoose.model('Invoice')
const Constants = require('../../utils/constant')

/**
 * 
 * @param {*} invoice 
 */
const createInvoice = async ({ userId, clientId, products, templateId }) => {
  const newInvoice = new Invoice()
  newInvoice.userId = userId
  newInvoice.clientId = clientId
  newInvoice.templateId = templateId
  newInvoice.status = Constants.INVOICE_STATUS.NEW
  newInvoice.products = products

  console.log('new Invoice', products)
  try {
    const invoiceSaved = await newInvoice.save()
    return invoiceSaved
  } catch (error) {
    throw Error(error)
  }
}

module.exports = {
  createInvoice
}
