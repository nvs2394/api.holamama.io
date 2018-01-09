const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InvoiceTemplateSchema = new Schema({
  templateURL: {
    type: String,
    default: '',
    required: true
  }
}, {
  timestamps: true
})

const invoiceTemplate = mongoose.model('InvoiceTemplate', InvoiceTemplateSchema)
module.exports = {
  InvoiceTemplate: invoiceTemplate
}
