const express = require('express');
var app = express();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 2 minutes
	max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: 'Too many accounts created from this IP, please try again after an hour',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.get('/api', limiter, (req, res) => {
    res.send('Rate Limit');
});

app.listen(700, () => {
    console.log('listeing the port 700');
});