const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  }
  // setting: {
  //   type: ObjectId,
  //   ref: 'Setting'
  // }
}, {
  timestamps: true
})

const user = mongoose.model('User', UserSchema)
module.exports = {
  User: user
}
