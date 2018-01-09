const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const OrderSchema = new Schema({
  product: [{
    productId: {
      type: ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      default: 0
    }
  }]
}, {
  timestamps: true
})

const order = mongoose.model('Order', OrderSchema)
module.exports = {
  Order: order
}
