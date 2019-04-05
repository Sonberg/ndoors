const routes = require('express').Router();
const firestore = require('./../config/index');
const referenceLinksDb = firestore.collection('Links')

routes.get('/:key', async (req, res) => {
    referenceLinksDb.doc(req.params.key).get().then(snapshot => {
        if (snapshot.exists) {
            res.send(snapshot.data());
        } else {
            res.send({status: "Not Found"})
        }
    })
})

routes.post('/:key/:status')

module.exports = routes;
