var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello Potato world!");
});

app.listen(80);