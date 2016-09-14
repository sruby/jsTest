//当一个函数被作为对象中的一个方法被调用的时候，this被设置为调用该方法的对象上：
var obj = {
    foo: function(){
        console.log(this === obj); 
        console.log(this); 
    }
};

obj.foo(); // true

//这个准则也适用于当调用函数时使用new操作符来创建对象的实例的情况下。在这种情况下，在函数的作用域内部this的值被设置为新创建的实例：
//当调用一个为绑定函数时，this默认情况下是全局上下文，在浏览器中它指向window对象。需要注意的是，ES5引入了严格模式的概念， 如果启用了严格模式，此时上下文默认为undefined。
function foo(){
    console.log(this);
}

new foo() // foo
foo() // window