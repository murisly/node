

// 直接对象量
var test = {a:1, b:2}
var a = 2;

// 通过new创建的对象
var c = new Array();
var b = new Date();

// 原型
var f = Object.create(test);
console.log(f.toString());
var e;