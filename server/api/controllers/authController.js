'use strict'
const superAgent = require('superagent')
const { FB_URL } = require('../../utils/constant')

/**
 * 
 * @param {*} accessToken 
 */
const fbLoginCtrl = async (accessToken) => {
  const url = `${FB_URL}${accessToken}`

  const authInfo = await superAgent
    .get(url)
    .set('Accept', 'application/json')
    .then((response) => {
      return JSON.parse(response.text)
    })
    .catch((ex) => {
      throw new Error(ex.message)
    })
  return authInfo
}

module.exports = {
  fbLoginCtrl
}
