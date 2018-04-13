'use strict'
const mongoose = require('mongoose')
const Category = mongoose.model('Category')

const create = async (data) => {
  const { name, imageUrl } = data
  const category = new Category({ name, imageUrl })

  try {
    const data = await category.save()
    return data
  } catch (error) {
    throw Error(error)
  }

}

const getById = async (id) => {
  try {
    const category = Category.findById(id)
      .sort({ createdAt: -1 }).select(' -__v')
    return category
  } catch (error) {
    throw new Error(error)
  }
}

const getList = async (userId) => {
  try {
    const categories = Category.find({userId})
      .sort({ createdAt: -1 }).select(' -__v')
    return categories
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  create,
  getById,
  getList
}
