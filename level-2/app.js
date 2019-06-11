const express       = require('express');
const app           = express();
const dateRoutes    = require('./api/routes/date');


app.use('/date', dateRoutes);

module.exports = app;