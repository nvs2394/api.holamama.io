const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const product = mongoose.model('Product', ProductSchema)
module.exports = {
  Product: product
}
