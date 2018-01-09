'use strict'
const mongoose = require('mongoose')
const User = mongoose.model('User')

/**
 * 
 * @param {*} id 
 */
const getUserByUserId = async (id) => {
  try {
    const user = User.findById(id).select('-isDelete -__v')
    return user
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * 
 * @param {*} email 
 */
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({email})
    return user
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * 
 * @param {*} user 
 */
const createUser = async (user) => {
  const newUser = new User({
    email: user.email,
    fullName: user.name,
    avatarUrl: user.picture.data.url,
    scope: ['USER']
  })
  try {
    const userSaved = await newUser.save()
    return userSaved
  } catch (error) {
    throw Error(error)
  }
}

module.exports = {
  getUserByUserId,
  createUser,
  getUserByEmail
}
