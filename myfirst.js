var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);

/*
What is Node.js?
 - Node.js is an open source server environment
 - Node.js is free
 - Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
 - Node.js uses JavaScript on the server

Why Node.js?
 - Node.js uses asynchronous programming!

What Can Node.js Do?
 - Node.js can generate dynamic page content
 - Node.js can create, open, read, write, delete, and close files on the server
 - Node.js can collect form data
 - Node.js can add, delete, modify data in your database

What is a Node.js File?
 - Node.js files contain tasks that will be executed on certain events
 - A typical event is someone trying to access a port on the server
 - Node.js files must be initiated on the server before having any effect
 - Node.js files have extension ".js"
 */