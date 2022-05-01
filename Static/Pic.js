const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer((request, response) => {
    if (request.url == '/') {
        const readStream = fs.createReadStream('./one.png');
        response.writeHead(200, { 'Content-type': 'image/png' });
        readStream.pipe(response);
    }
    else {
        response.write('You are in other domain page');
    }
});
console.log(`Listening on port ${port}`);
server.listen(port);