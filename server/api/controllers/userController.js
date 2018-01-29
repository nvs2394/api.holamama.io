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

/**
 * 
 * @param {*} userId 
 * @param {*} company Object company info
 */
const updateCompanyInfo = async (userId, company) => {
  const { phoneNumber, address, website, email, name = {} } = company
  try {
    const companyUpdated = User.findById(userId).exec()
    companyUpdated.then((user) => {
      user.company = {
        phoneNumber: phoneNumber || user.company.phoneNumber,
        address: address || user.company.address,
        website: website || user.company.website,
        email: email || user.company.email,
        name: name || user.company.name
      }
      user.save()
    })
    return companyUpdated
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getUserByUserId,
  createUser,
  getUserByEmail,
  updateCompanyInfo
}
