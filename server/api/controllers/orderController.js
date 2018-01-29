'use strict'
const mongoose = require('mongoose')
const Order = mongoose.model('Order')

const createOrder = async (user) => {
  const newOrder = new Order({
  })
  try {
    const orderSaved = await newOrder.save()
    return orderSaved
  } catch (error) {
    throw Error(error)
  }
}

module.exports = {
  createOrder
}
