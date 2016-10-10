var util = require('util');

var name = "jam";

/*
字符串格式化
--> name is : jam
 */
var desc = util.format("name is : %s", name);
console.log(desc);


/*
输出带有时间的日志
--> 10 Oct 13:44:59 - jam
 */
util.log(name);


var attribute = {name:"tom", sex:"female", age:20, enter:true};
console.log(util.inspect(attribute));