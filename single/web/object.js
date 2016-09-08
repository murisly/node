
function log(num, obj) {
    console.log(num.toString());
    console.log(obj);
}


// 直接对象量
var test = {a:1, b:2}
log(1, test.prototype);  // =>undefined
log(2, test.__proto__);  // =>{}


// 函数
function People(name, age) {
    this.name = name;
    this.age = age;
}

People.prototype.getName = function() {
    return this.name;
}

People.prototype.getAge = function() {
    return this.age;
}

People.prototype.add = function(a, b) {
    return a + b;
}

log(3, People.prototype);  // Peopel{}
log(4, People.__proto__);  // [Function]
log(5, People.constructor);  // [Function: Function]
log(6, People);  // [Function: People]


// new 对象
var people = new People('jam', 20);
log(7, people.prototype);  // undefined
log(8, people.__proto__);  // People{}
log(9, people.constructor);  // [Function: People]
log(10, people.constructor === People);
log(10.1, People.prototype.constructor === People);
log(11, people.__proto__ === People.prototype);


// 调用其他原型
var addTest = People.prototype.add(1, 2);
log(18, addTest);


// 重写原型
People.prototype = {
    getname : function() { return 'file'; },
}

log(12, People);  // [Function: People]
log(13, People.prototype);  // { getname: [Function] }
log(14, People.__proto__);  // [Function]
log(15, People.constructor);  // [Function: Function]


// 创建新的对象
var p = new People('tom', 21);
log(16, p.prototype);  //
log(17, p.constructor);  //


var e;