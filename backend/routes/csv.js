const routes = require('express').Router()
const loadCsv = require('../csv-provider');

let skills = [];
let abilities = [];

routes.get('/abilities', async (req, res) => {
    const result = abilities.filter(search(req.query.q || '')).slice(0, 10);
    res.send(result);
});


routes.get('/skills', async (req, res) => {
    const result = skills.filter(search(req.query.q || '')).slice(0, 10);
    res.send(result);
});


loadCsv('./static/abilities.csv').then(res => abilities = res);
loadCsv('./static/skills.csv').then(res => skills = res);

// Search for string
const search = query => str => str && str.indexOf(query) > -1;

module.exports = routes;
