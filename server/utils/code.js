const httpStatus = require('http-status')

module.exports = {
  OK: httpStatus.OK,
  INTERNAL_SERVER_ERROR: httpStatus.INTERNAL_SERVER_ERROR,
  CAN_NOT_LOGIN: 1000,
  USER_NOT_FOUND: 1001,
  CAN_NOT_UPDATE: 1002,
  CAN_NOT_CREATE: 1003
}
