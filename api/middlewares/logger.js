const ENV = require('../constants/env');
const morgan = require('morgan');


const logger = morgan(
  ENV.NODE === 'production'
    ? 'common'
    : 'dev'
);

module.exports = logger;