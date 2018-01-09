const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema({
  fullName: {
    type: String,
    default: '',
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  avatarUrl: {
    type: String,
    default: ''
  },
  logoUrl: {
    type: String,
    default: ''
  },
  about: {
    type: String,
    default: ''
  },
  company: {
    name: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    website: {
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
  },
  setting: {
    defaultCurrency: {
      type: String,
      default: ''
    },
    defaultTemplateId: {
      type: ObjectId,
      ref: 'InvoiceTemplate'
    }
  }
}, {
  timestamps: true
})

const user = mongoose.model('User', UserSchema)
module.exports = {
  User: user
}
