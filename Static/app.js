const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer(function (request, response) {
    if (request.url == '/') {
        const readStream = fs.createReadStream('./index.html');
        response.writeHead(200, { 'Content-type': 'text/html' });
        readStream.pipe(response);
        response.end();
    }
    else {
        response.write('You are in the other domain page');
    }
});
console.log(`Listening on server ${port}`);
server.listen(port);