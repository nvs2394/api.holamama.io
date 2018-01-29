'use strict'
const mongoose = require('mongoose')
const Product = mongoose.model('Product')

const newProduct = async (data) => {
  const { name, price, userId = {} } = data
  const newProduct = new Product({ name, price, userId })

  try {
    const product = await newProduct.save()
    return product
  } catch (error) {
    throw Error(error)
  }

}

const getProductsByUserId = async (userId) => {
  try {
    const products = Product.find({userId})
      .sort({ createdAt: -1 }).select(' -__v')
    return products
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  newProduct,
  getProductsByUserId
}
