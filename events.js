const express = require('express');
const app = express();
const EventEmitter = require('events');
const events = new EventEmitter();

let count = 0;

events.on('countAPI', (req) => {
    count++;
    console.log('Total count is: '+count +' of: '+req);
});

app.get('/events', (req, res) => {
    res.send('events have been fired');
    events.emit('countAPI', 'events');
});

app.get('/about', (req, res) => {
    res.send('about have been fired');
    events.emit('countAPI', 'about');
});

app.listen('700');