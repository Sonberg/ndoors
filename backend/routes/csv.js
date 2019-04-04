const routes = require('express').Router();
const fs = require('fs');
const parse = require('csv-parse')

let skills = [];
let abilities = [];

routes.get('/abilities', async (req, res) => {
    res.send(abilities.filter(search(req.query.q)));
});


routes.get('/skills', async (req, res) => {
    res.send(skills.filter(search(req.query.q)));
});


const loadSkillsAsync = async () => {
    const file = await readFile('./static/skills.csv');
    const parsed = await parseFile(file)
    skills = parsed.map(parseLine(0))

}

const loadAbilitiesAsync = async () => {
    const file = await readFile('./static/abilities.csv')
    const parsed = await parseFile(file)
    abilities = parsed.map(parseLine(0))
}

// Load file from disk
const readFile = url => new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', function (err, contents) {
        if (err) return reject(err);
        resolve(contents);
    });
});

// Parse csv
const parseFile = file => new Promise((resolve, reject) => {
    parse(file, {
        comment: '#'
    }, function (err, output) {
        if (err) return reject(err);
        resolve(output);
    })
})

// Parse line
const parseLine = index => str => str[0].split(';')[index];


// Search for string
const search = query => str => str.indexOf(query) > -1;

// Load files
loadSkillsAsync();
loadAbilitiesAsync();

module.exports = routes;
