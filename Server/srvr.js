const http = require('http');
const port = 4000;
const server = http.createServer(function (request, response) {
    if (request.url === '/') {
        response.write('<h1 style="text-align:center;">NodeJS main home page</h1>');//If domain is correct then write the page in HTTP Web server.
        response.write(`<p>Welcome to NodeJS </p>`);
        response.end();//To catch the response and end it.
    }
    else {
        response.write("You are in other domain page");
        response.end();
    }
});
console.log(`Listening on port ${port}`);
server.listen(port);