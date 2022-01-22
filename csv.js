const express = require('express');
const app = express();
const ObjectsToCsv = require('objects-to-csv');

app.get('/', async (req, res) => {

    const list = [{
        'name': 'Shubham',
        'email': 'shubham@gmail.com',
        'mobile': '0000000021',
        'address': 'New Delhi'
    },{
        'name': 'Sonu',
        'email': 'shubham@gmail.com',
        'mobile': '0000000021',
        'address': 'New Delhi'
    }];

    const csv = new ObjectsToCsv(list)
    await csv.toDisk(`./csv/list_${Math.floor((Math.random() * 999) + 1)}.csv`)

    res.send('CSV have been generated');
});

app.listen('700');