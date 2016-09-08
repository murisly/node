
var fs = require('fs');

write();

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

