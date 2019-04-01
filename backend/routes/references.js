const db = require("./../config/index");

const routes = require('express').Router();

routes.get('/', function (req, res) {
    res.json('All your references')
});

routes.get('/test', async function (req, res) {
    const Snap = await  db.collection("Users").doc('k7HAeFDwMAOh6VnHQe9D/').collection('References').get()
    
    Snap.docs.forEach(doc => {
        console.log(doc.data());
    });

    res.status(200).send();
});

module.exports = routes;
