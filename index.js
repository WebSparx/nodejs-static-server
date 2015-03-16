if(process.env.NODETIME_ACCOUNT_KEY) {
  require('nodetime').profile({
    accountKey: process.env.NODETIME_ACCOUNT_KEY,
    appName: 'WebSparx' // optional
  });
}




var express = require("express");
var serveIndex = require('serve-index'); //to serve static html files
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic('public/')); // directory to use as root for html files


//serve index file from ./public/ folder
app.use('/', serveIndex('public/', {'icons': true}));

app.get('/about', function (req, res) {
res.sendFile(__dirname + '/public/about.html');
});

app.get('/projects', function (req, res) {
res.sendFile(__dirname + '/public/projects.html');
});

app.get('/faq', function (req, res) {
res.sendFile(__dirname + '/public/faq.html');
});

app.get('/contact', function (req, res) {
res.sendFile(__dirname + '/public/contact.html');
});

app.get('/*', function (req, res) {
res.sendFile(__dirname + '/public/404.html');
});

var port = process.env.PORT || 2121;

app.listen(port);
console.log("Server has started.");
