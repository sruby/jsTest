function Person(name,age){
	this.name = name;
	this.age = age;
}

Person.prototype.sayHello = function(){
	console.log("sayHello"+this.name+this.age);
}

Person.prototype.address = "shenzhen";
Person.prototype.child = ["小孩1","小孩2"];

var person1 = new Person("xiaoming",11);
var person2 = new Person("xiaoming2",12);
person1.sayHello();
//修改非引用类型的原型变量
person1.address = "xianggang";
//修改引用类型的原型变量
person1.child.push("小孩3");

//非引用类型的原型变量不会共享
console.log("address:"+person2.address);
//引用类型的原型变量在各个对象之间共享
console.log(person2.child);

console.log(Person.prototype);
console.log(Person.prototype.constructor);
console.log(Person.prototype.constructor === Person);

console.log(person1.prototype);

//对象的__proto__属性指向构造函数
console.log(person1.__proto__);

//判断实例属于的原型
console.log(person1 instanceof Person);
console.log(Person instanceof Function);



