
var cluster = require('cluster');
var http = require('http');
var cpuNumber = 4;

cluster.schedulingPolicy = cluster.SCHED_RR;

if (cluster.isMaster) {
	for (var i = 0; i < cpuNumber; i++) {
		cluster.fork();
	}

	cluster.on('fork', function(work) {
		console.log('start1 :' + work.process.pid);
	})

	cluster.on('fork', function(work) {
		console.log('start2 :' + work.process.pid);
	})
} else {
	http.createServer(function(req,res) {
		res.writeHead(200);
		res.end('hello ' + process.pid);
	}).listen(8080);
}