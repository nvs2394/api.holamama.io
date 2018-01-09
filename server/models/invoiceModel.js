const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const InvoiceSchema = new Schema({
  clientId: {
    type: ObjectId,
    ref: 'Client'
  },
  templateId: {
    type: ObjectId,
    ref: 'InvoiceTemplate'
  },
  orderId: {
    type: ObjectId,
    ref: 'Order'
  },
  status: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const invoice = mongoose.model('Invoice', InvoiceSchema)
module.exports = {
  Invoice: invoice
}
