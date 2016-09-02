var express = require('express');
var app = express();
var math = require('./controller/math');

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/test', function(req, res) {
    var a = new Object();
    a.add = math.add;
    res.send(a.add(4, 5).toString());
});

var server = app.listen(5858, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
