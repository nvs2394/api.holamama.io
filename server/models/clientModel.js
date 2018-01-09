const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
  fullName: {
    type: String,
    default: '',
    required: true
  },
  email: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  },
  phoneNumber: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
})

const client = mongoose.model('Client', ClientSchema)
module.exports = {
  Client: client
}
