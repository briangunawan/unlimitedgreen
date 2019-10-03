const http = require('http');
const port = process.env.PORT || 3000

const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))