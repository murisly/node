
var cluster = require('cluster');
var http = require('http');
var cpuNumber = 4;

cluster.setupMaster({
  silent: true,
});
cluster.schedulingPolicy = cluster.SCHED_RR;


if (cluster.isMaster) {
	for (var i = 0; i < cpuNumber; i++) {
		cluster.fork();
	}

	cluster.on('fork', function(worker) {
		console.log('fork1 :' + worker.process.pid);
	})

	cluster.on('fork', function(worker) {
		console.log('fork2 :' + worker.process.pid);
	})

	cluster.on('online', function(worker) {
		console.log('online1 :' + worker.process.pid);
	})

	cluster.on('online', function(worker) {
		console.log('online2 :' + worker.process.pid);
	})

	cluster.on('listening', function(worker, address) {
  		console.log("listening :" + worker.process.pid + ' address :'+ address.address + " port :" + address.port);
	});

	function sendMessage() {
		Object.keys(cluster.workers).forEach(function(id) {
			cluster.workers[id].send("send: " + id);
			console.log("master: " + id);
		});
		//console.log(cluster.workers);
	}

	setInterval(sendMessage, 1000 * 10);
} else {
	process.on('message', function(msg) {
		console.log('pid:' + process.pid + " id:" + cluster.worker.id + ' msg:' + msg);
	})

	http.createServer(function(req,res) {
		res.writeHead(200);
		res.end('hello ' + cluster.worker.id + " pid: " + process.pid);
	}).listen(8080);
}