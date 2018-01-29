'use strict'
const mongoose = require('mongoose')
const Invoice = mongoose.model('Invoice')
const Constants = require('../../utils/constant')

/**
 * 
 * @param {*} invoice 
 */
const createInvoice = async (invoice) => {
  const newInvoice = new Invoice({
    clientId: invoice.clientId,
    templateId: invoice.templateId,
    orderId: invoice.orderId,
    status: Constants.INVOICE_STATUS.NEW
  })
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
