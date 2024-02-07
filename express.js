const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    app.use(express.static(__dirname + '/homePage'));
    res.sendFile(path.join(__dirname, 'homePage/home.html'));
});

app.listen(port);