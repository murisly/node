var async = require('async');

function log(n) {
	console.log(n.toString());
}

/**
 * 按顺序依次执行一组函数。每个函数产生的值，都将传给下一个。
 * 如果中途出错，后面的函数将不会被执行。错误信息将传给waterfall最终的callback。之前产生的结果被丢弃。
 *
 * 这个函数名为waterfall(瀑布)，可以想像瀑布从上到下，中途冲过一层层突起的石头。
 *
 * 注意，该函数不支持json格式的tasks
 */
// async.waterfall(tasks, [callback]);

/**
 * 所有函数正常执行，每个函数的结果都将变为下一个函数的参数。
 *
 * 注意，所有的callback都必须形如callback(err, result)，但err参数在前面各函数中无需声明，它被自动处理。
 */

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