
var fs = require('fs');

stat();

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

/*
{ dev: 311270,
	mode: 33206,
	nlink: 1,
	uid: 0,
	gid: 0,
	rdev: 0,
	blksize: undefined,
	ino: 9570149209327916,
	size: 6,
	blocks: undefined,
	atime: Mon Oct 10 2016 11:26:45 GMT+0800 (中国标准时间),
	mtime: Mon Oct 10 2016 11:26:49 GMT+0800 (中国标准时间),
	ctime: Mon Oct 10 2016 11:26:57 GMT+0800 (中国标准时间),
	birthtime: Mon Oct 10 2016 11:26:45 GMT+0800 (中国标准时间) }
*/
function stat() {
	fs.stat("123.txt", function(err, data) {
		if (err) {
			throw err;
		}
		console.log(data);
	});
}