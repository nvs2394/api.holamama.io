const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Constants = require('../utils/constant')
const { AVAILABLE } = Constants.PRODUCT_STATUS

const ProductSchema = new Schema({
  userId: {
    type: ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: AVAILABLE
  }
}, {
  timestamps: true
})

const product = mongoose.model('Product', ProductSchema)
module.exports = {
  Product: product
}
