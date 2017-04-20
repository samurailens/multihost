var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello Tomato world!");
});

app.listen(80);