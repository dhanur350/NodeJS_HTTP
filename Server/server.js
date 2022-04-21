const http = require('http');
const port = 8080;
http.createServer((request, response) => {
    response.write("<h1>This is node part</h1>");
    response.end();
}).listen(port);
console.log(`Listening to port ${port}`);