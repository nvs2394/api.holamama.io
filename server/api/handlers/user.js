'use strict'

const httpStatus = require('http-status')
const _ = require('lodash')
const userController = require('../controllers/userController')
const { responseSuccess, responseError } = require('../../helpers/reponseHelper')
const code = require('../../utils/code')
const message = require('../../utils/message')

const getProfileByUserId = async (req, reply) => {

}

const getUserSetting = async (req, reply) => {
  
}

module.exports = {
  getProfileByUserId,
  getUserSetting
}
