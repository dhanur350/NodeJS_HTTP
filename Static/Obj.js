const http = require('http');
const fs = require('fs');
http.createServer((request, response) => {
    const readStream = fs.createReadStream('./one.json');
    response.writeHead(200, { 'Content-type': 'application/json' });
    readStream.pipe(response);
}).listen(5000);
console.log(`Listening on server 5000`);