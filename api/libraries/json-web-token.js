const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const ENV = require('../constants/env');


const sign = payload => promisify(jwt.sign)(payload, ENV.JWT_SECRET);
const verify = token => promisify(jwt.verify)(token, ENV.JWT_SECRET);

module.exports = {
  sign,
  verify,
};