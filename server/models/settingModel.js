const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const SettingSchema = new Schema({
  defaultCurrency: {
    type: String,
    default: ''
  },
  defaultTemplateId: {
    type: ObjectId,
    ref: 'InvoiceTemplate'
  }
}, {
  timestamps: true
})

const setting = mongoose.model('Setting', SettingSchema)
module.exports = {
  Setting: setting
}
