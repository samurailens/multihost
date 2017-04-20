var express = require('express');
var app = module.exports = express();
//  = module.exports
app.get('/help', function(req, res){
    res.send("Hello Potato world! in index.js");
});

app.get('/setup', function(req, res){
    res.send("Please setup this app");
});

app.post('/testpost', function(req, res){
    console.log(req.body)
    console.log(req.params)
    res.send("Post request working fine" );
});

//app.listen(80);