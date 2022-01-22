const http = require('http');
const server = http.createServer();
const fs = require('fs');

server.on('request', (req, res) => {

    // Create a readable stream
    var readerStream = fs.createReadStream('./views/template.html');

    // Handle stream events --> data, end, and error
    readerStream.on('data', (chunk) => {
        res.write(chunk);
    });

    readerStream.on('end', () => {
        res.end();
    });

    readerStream.on('error', function(err) {
        console.log(err.stack);
        res.end(err.stack);
    });
});

server.listen(700, '127.0.0.1');