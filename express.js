const express = require('express');
var app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        bodyPart: 'Hello Developers!'
    });
});

app.get('/about', (req, res) => {
    const body = {
        data: "About Page"
    }
    res.render('about', {body});
});

app.listen(700, () => {
    console.log('listeing the port 700');
});