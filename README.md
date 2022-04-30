# NodeJS_HTTP

NodeJS built-in module called HTTP, allows NodeJS to transfer data over the browser localhost.

## NodeJS HTTP module helps us to create a web server of HTTP using NodeJS

- Creating a simple HTTP Web Server using NodeJS HTTP.
- How we can serve static files using HTTP modules.
- Here we write const http and ew use require('http') means we are using http as a server object which is a variable of type const
- Everytime we use and function from http object of web server we always need a callback function
- Request object is what client request from us, as we wrote variable of type const request.
- Everything we want to show in web page via web server we use response.write(), and in order to call it in from server we have to tell server to send response , so we'll write response.end();

## One Little error I was doing in NodeJS HTTP in File System, while creating server I accidentally put response.end() which'll end it's server on te spot without showing us output so always put response.end() at the end of the result showing in it

- for more refference go see `Obj.js` `app.js` and `Object.js` in `Static` folder.
