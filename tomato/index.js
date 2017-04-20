var express = require('express');
var app = module.exports= express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/help', function(req, res){
    res.send("Hello Tomato world!");
});

app.get('/', function(req, res, next) {
  res.send('index');
});

app.post('/testme', function(req, res, next) {
    console.log(req.body)
    res.send("Post request working fine" );
});

//app.listen(8080);