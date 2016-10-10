var url = require('url');
var util = require('util');

var path = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";

var paras = url.parse(path);

console.log(util.inspect(paras));