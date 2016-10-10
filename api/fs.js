
var fs = require('fs');

rename();

function read() {
	fs.readFile('d:\\a.txt', 'utf8', function(err, data){
		if (err) {
			console.log('error');
		} else {
			console.log(data);
		}
	})
}

function write() {
	fs.writeFile('test.txt', "just a test\n", function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("save success!");
		}
	})
}

function test() {
	fs.readFile("/", 'utf-8', function(err, data) {
		console.log(err);
	});
}

function rename() {
	fs.rename("test.txt", "123.txt", function(err){
		if (err) {
			throw err;
		}
	});
}
