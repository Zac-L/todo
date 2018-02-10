const database = require('../libraries/database');
const server = require('../libraries/server');

database.connect()
  .then(() => server.start());