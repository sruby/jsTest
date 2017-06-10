/**
 * 测试异常的产生
 */
function produceError(){
	throw  new Error("message: string");
}

/**
 * 监听异常
 */
window.addEventListener('error', function (e) {
    var stack = e.error.stack;
    var message = e.error.toString();
    if (stack) {
        message += '\n' + stack;
    }
    console.log(message);
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', '/log', true);
    // xhr.send(message);
});

produceError();

console.log("========================")

