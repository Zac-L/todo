const express = require('express');
const logger = require('../middlewares/logger');
const apiRoutes = require('../routes/api');

const app = express();

app.use(logger);
app.use('/v1', apiRoutes);

module.exports = app;