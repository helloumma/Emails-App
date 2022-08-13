'use strict'; 

const http = require('http');

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html')
    response.end('Hello world');
})

server.listen(port, hostname, () => {
    console.log('server is running')
})