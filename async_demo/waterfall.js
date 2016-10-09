var async = require('async');

function log(n) {
	console.log(n.toString());
}

async.waterfall([
	function(cb) {log(1); cb(null, 2);},
	function(result, cb) {log(result); cb("error", result + 1);},
	function(result, cb) {log(result); cb("error", result + 1);}
	], function(err, result) {
		if (err) {
			log(err);
		}

		log(result);
	});

function a(cb) {
	log(10);
	cb(null, 11);
}

function b(result, cb) {
	log(result);
	cb(null, result + 1);
}

function c(result, cb) {
	log(result);
	cb(null, result + 1);
}

async.waterfall([a, b ,c],
	function(err, result) {
		if (err) {
			log(err);
		}
		log(result);
	})