const http = require('http');
const port = process.env.PORT || 3000
var path = require('path');

const express = require('express')
const app = express()

app.use(express.static(__dirname + '/'));

var left = 0;
var right = 0;
var top = 0;

// First, run 'npm install pusher'

app.get('/demo', function(req, res) {
    res.sendFile(path.join(__dirname + '/input.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app.get('/left', function(req, res) {
    left += 1
});
app.get('/leftt', function(req, res) {

    res.send({left:left})
});

app.get('/rightt', function(req, res) {

    res.send({left:right})
});
app.get('/right', function(req, res) {
    right += 1
});


app.get('/topt', function(req, res) {

    res.send({left:top})
});
app.get('/top', function(req, res) {
    top += 1
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`))