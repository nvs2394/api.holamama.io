'use strict'
const superAgent = require('superagent')
const { FB_URL } = require('../../utils/constant')

/**
 * 
 * @param {*} accessToken 
 */
const fbLoginCtrl = async (accessToken) => {
  const url = `${FB_URL}${accessToken}`
  console.log('url', url)

  const authInfo = await superAgent
    .get(url)
    .set('Accept', 'application/json')
    .then((response) => {
      return JSON.parse(response.text)
    })
    .catch((ex) => {
      return ex
    })
  return authInfo
}

module.exports = {
  fbLoginCtrl
}
