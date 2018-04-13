const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
})

const category = mongoose.model('Category', CategorySchema)
module.exports = {
  Category: category
}
