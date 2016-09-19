
// 函数对象
function add(name){
    this.name = name;
}

console.log(add.prototype);
console.log(add.__proto__);

var person = new add('jam');
console.log(person.__proto__ === person.constructor.prototype);

// 普通对象
var test = {a:1, b:2}
console.log(test.prototype);
console.log(test.__proto__);


var a = 1;