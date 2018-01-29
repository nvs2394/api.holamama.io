const httpStatus = require('http-status')

module.exports = {
  OK: httpStatus[200],
  INTERNAL_SERVER_ERROR: httpStatus[500],
  CAN_NOT_LOGIN: 'Can not login',
  USER_NOT_FOUND: 'User not found',
  CAN_NOT_UPDATE: 'Can not update',
  CAN_NOT_CREATE: 'Can not create new'
}
