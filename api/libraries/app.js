const express = require('express');
const cors = require('cors');
const logger = require('../middlewares/logger');
const apiRoutes = require('../routes/api');

const app = express();

app.use(cors());

app.use(logger);
app.use('/v1', apiRoutes);

module.exports = app;