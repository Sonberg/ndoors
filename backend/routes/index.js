const routes = require('express').Router();

// Api routes
routes.use('/api/references/', require('./references'));
routes.use('/api/users/', require('./users'));

module.exports = routes;