const http = require('http');
const port = process.env.PORT || 3000
var path = require('path');

const express = require('express')
const app = express()

app.use(express.static(__dirname + '/'));



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/insight', function(req, res) {
    res.sendFile(path.join(__dirname + '/insight.html'));
});

app.get('/temp', function(req, res) {
    res.sendFile(path.join(__dirname + '/temp.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))