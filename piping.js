const http = require('http');
const server = http.createServer();
const fs = require('fs');

server.on('request', (req, res) => {

    // Create a readable stream
    var readerStream = fs.createReadStream('./views/template.html');
    readerStream.pipe(res);
});

server.listen(700, '127.0.0.1');