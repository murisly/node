
/**
 * 创建新的class对象
 */

function Math() {};

Math.prototype = {
    add : function (a, b) {
        return a + b;
    },
    sub : function (a, b) {
        return a - b;
    },
    mul : function (a, b) {
        return a * b;
    },
}

var a = new Math();
var retult = a.add(2, 3);
var b = 1;

var point = {x:1,y:1};
var c = Object.create(point);
c.x = 2;
console.log(c.x);
point.y = 2;
console.log(point.x);
console.log(c.y);