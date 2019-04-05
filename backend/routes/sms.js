const routes = require('express').Router();
const {getCredentials, url} = require('./../config/46elk');
const base64 = require('base-64');
const request = require('request');

routes.get('/:phone', async (req, res) => {
    console.log('hello getting stuff ', req.param.phone);
    res.send('hello')
})

routes.post('/:phone', async function (req, res) {
    console.log("hello path, ", req.params.phone, url);
    res.status(200).send("sent to phone: " + req.params.phone)
});

async function sendSms(phoneNumber, message) {
    const auth = await getCredentials();
    console.log("get auth", auth)
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + base64.encode(auth.user + ":" + auth.pass));
    // fetch(url, {
    //     method: 'POST',
    //     headers: headers,
    //     body: {
    //         from: auth.phone,
    //         to: phoneNumber,
    //         message: message,
    //     }
    // })
    // .then(response => {
    //     console.log(response.statusText);
    // })

    request.post({
        url: url,
        form: {
            from: auth.phone,
            to: phoneNumber,
            message: message,
        },
        auth: {
            user: auth.user,
            pass: auth.pass
        }
    }, (error, response, body) => {
        console.log(JSON.parse(body).status);
    })
}

module.exports = routes;
