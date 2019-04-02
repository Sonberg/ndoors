const db = require("./../config/index");
const routes = require('express').Router();
const collection = 'Users';
const userController = require('../controllers/resourceController')(collection);

routes.get('/', userController.all);
routes.get('/:id', userController.get);

routes.post('/', async function (req, res) {
    await db.collection(collection).doc(req.body.email).set(req.body);
    res.status(200).send();
});

routes.put('/:id', userController.put);
routes.patch('/:id', userController.patch);
routes.delete('/:id', userController.delete);

module.exports = routes;