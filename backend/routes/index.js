const routes = require('express').Router();

// Map api routes
routes.use('/api/references/', require('./references'));
routes.use('/api/users/', require('./users'));
routes.use('/api/skills/', require('./skills'));

module.exports = routes;