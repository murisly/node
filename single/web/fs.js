
var fs = require('fs');

fs.readFile('d:\\a.txt', 'utf8', function(err, data){
	if (err) {
		console.log('error');
	} else {
		console.log(data);
	}
})