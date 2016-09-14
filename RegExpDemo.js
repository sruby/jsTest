function TestDemo(reg,str){
	var regObj = new RegExp(reg);
	return regObj.test(str);
}

var result = TestDemo("^[A-Za-z0-9]+$","1234234");
console.log(result);
