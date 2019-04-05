const routes = require('express').Router();
const firestore = require('./../config/index');
const referenceLinksDb = firestore.collection('References')

routes.get('/:id', async (req, res) => {
    referenceLinksDb.doc(req.params.id).get().then(snapshot => {
        if (snapshot.exists) {
            let results = snapshot.data();
            results["status"] = "Found";
            res.send(results);
        } else {
            res.send({status: "Not Found"})
        }
    })
})

routes.post('/:id/verified/:value', async (req, res) => {
    referenceLinksDb.doc(req.params.id).update({
        verified: (req.params.value === "true")
    })
})

module.exports = routes;
