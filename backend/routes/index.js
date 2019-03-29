const routes = require('express').Router();

// Api routes
routes.use('/api/references/', require('./references'));

module.exports = routes;