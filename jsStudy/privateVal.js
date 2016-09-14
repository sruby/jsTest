/**
 * 
 * @authors sruby
 * @date    2016-04-09 10:51:58
 * @version $Id$
 */
 var obj;
(function(){
	//实现私有成员name和job,外部能不能直接修改它们.只能通过getName能访问.
	var name = "sruby",
		job = "coder";
	obj = {
		getName: function(){
			return name;
		}
	}
}())
console.log(obj.getName());
