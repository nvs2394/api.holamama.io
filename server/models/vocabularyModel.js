const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const VocabularySchema = new Schema({
  imageUrl: {
    type: String,
    default: ''
  },
  mp3Url: {
    type: String,
    default: ''
  },
  vocabulary: {
    type: String,
    default: ''
  },
  explain: {
    type: String,
    default: ''
  },
  example: {
    type: String,
    default: ''
  },
  translate: {
    type: String,
    default: ''
  },
  categoryId: {
    type: ObjectId,
    ref: 'Category'
  }
}, {
  timestamps: true
})

const vocabulary = mongoose.model('Vocabulary', VocabularySchema)

module.exports = {
  Vocabulary: vocabulary
}
