const { reponseHelper: { responseError } } = require('../../helpers')
const code = require('../../utils/code')
const message = require('../../utils/message')
const { fbLoginCtrl } = require('../controllers/authController')
const { getUserByEmail, createUser } = require('../controllers/userController')
const { genToken, payloadToken } = require('../../../libs/appJwt')

/**
 * 
 * @param {*} request 
 * @param {*} reply 
 */
const facebookSignin = async (request, reply) => {
  const accessToken = request.query.accessToken
  const authInfo = await fbLoginCtrl(accessToken)
  try {
    if (authInfo) {
      const userExist = await getUserByEmail(authInfo.email)
      if (userExist) {
        const dataToken = payloadToken(userExist)
        return reply({
          access_token: genToken(dataToken)
        })
      }
      const newUser = await createUser(authInfo)
      if (newUser) {
        const dataToken = payloadToken(newUser)
        return reply({
          access_token: genToken(dataToken)
        })
      }
    }

    return reply(responseError(code.CAN_NOT_LOGIN, message.CAN_NOT_LOGIN, true))
  } catch (error) {
    return reply(responseError(code.CAN_NOT_LOGIN, message.CAN_NOT_LOGIN, error.message))
  }
}
module.exports = {
  facebookSignin
}
