/**
 * @description test method
 */
function methodtest(params){
	console.log("============methodtest====="+params);
}

/**
 * @description 测试apply方法
 */
function appletest(methodName,params){
	methodName.apply(this,[params]);
	methodName.call(this,params);
}

appletest(methodtest,1);
appletest(methodtest,2);
