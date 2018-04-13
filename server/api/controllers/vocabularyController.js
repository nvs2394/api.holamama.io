'use strict'
const mongoose = require('mongoose')
const Vocabulary = mongoose.model('Vocabulary')

const create = async (data) => {
  const { imageUrl, mp3Url, vocabulary: name, explain, example, translate, categoryId } = data
  const vocabulary = new Vocabulary({
    imageUrl,
    mp3Url,
    vocabulary: name,
    explain,
    example,
    translate,
    categoryId
  })

  try {
    const data = await vocabulary.save()
    return data
  } catch (error) {
    throw Error(error)
  }

}

const getById = async (id) => {
  try {
    const vocabulary = Vocabulary.findById(id)
      .sort({ createdAt: -1 }).select(' -__v')
    return vocabulary
  } catch (error) {
    throw new Error(error)
  }
}

const getListByUserId = async (userId) => {
  try {
    const vocabularys = Vocabulary.find({})
      .sort({ createdAt: -1 }).select(' -__v')
    return vocabularys
  } catch (error) {
    throw new Error(error)
  }
}

const getListByCategoryId = async (categoryId) => {
  try {
    const vocabularys = Vocabulary.find({ categoryId })
      .sort({ createdAt: -1 }).select(' -__v')
    return vocabularys
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  create,
  getById,
  getListByUserId,
  getListByCategoryId
}
