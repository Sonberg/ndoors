const db = require("./../config/index");

const routes = require('express').Router();

routes.get('/', async function (req, res) {
    let snap = await db.collection("Users").get();
    res.json(snap.docs.map(doc =>  doc.data()));

    Promise.all(docs).then(values => res.status(200).json(values));
});

routes.get('/:id', async function (req, res) {
    let snap = await db.collection("Users").doc(req.params.id).get();
    res.json(snap.data());
});

module.exports = routes;
