'usr strict';

var arr = new Array();

var g = global.process;

var m = require('./math');
var a = m.add(4 ,5);
var test = "hello!";



var inherit = require('./inherit');
var people = {
    name : "jam",
    age: 20,    
};
var tom = inherit.inherit(people);
var age = tom.age;
var name = tom.name;

console.log(a);