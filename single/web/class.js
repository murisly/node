
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