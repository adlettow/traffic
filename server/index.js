var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var utils = require('./utils');


var clientPath = path.join(__dirname, '../client');
var app = express();

app.use(express.static(clientPath));
app.use(bodyParser.json());



app.get('*', function(req, res, next) {
    if (utils.isAsset(req.url)) {
        return next();
    } else {
        res.sendFile(path.join(clientPath, 'index.html'));
    }
});

app.listen(3000);
console.log('Server listening on Port 3000');