/**
 * 
 * @authors sruby
 * @date    2016-05-02 19:05:47
 * @version $Id$
 */
//继承的第一种方式,使用ECMAScript 5中的create方法
var parent = {
	"name" : "sruby"
}

//继承parent
var child = Object.create(parent);

//覆盖继承override的属性
child.name = "ruby";

//不会修改原型链本身
console.log(parent.name);

console.log(child.name);

//继承的第二种方式,使用原型链prototype
//var child2 = {};
// var child2 = function {};

//定义一个空的构造函数
function child2() {};

child2.prototype = parent;

console.log(child2.name);

//兼容各个版本浏览器的原型继承方式
function inherit(p){
	if(p==null){
		throw TypeError();
	}

	//能力检测
	// if(Object.create){
	// 	return Object.create(p);
	// }

	var t = typeof p;
	// console.log(t);
	
	if(t!== "object" && t != "function"){
		throw TypeError();
	}

	function f(){};
	f.prototype = p;
	return new f();
}

var child3 = inherit(parent);
console.log(child3.name);