let myVar = 1; // local variable (behave the same as you think)
var i = 0; // Global variable: need to be careful!

console.log("Debug message");
console.log(typeof myVar); // number

myVar = "string";
console.log(typeof myVar); // "string"

myVar = {
	field3 : ["string", "string", "string"],
	method : function() {
		var i = "method"; // Will override global i
		console.log("you called a method!")
	}
};

if(myVar) { // Test if not "null", "undefined", empty string or 0
	var testGlobal = 1; // Will exist in the whole function (here, the whole script)
	console.log(typeof myVar); // "object"
	console.log(typeof myVar.field3); // "object": Default arrays are objects
	console.log(Array.isArray(myVar["field3"])); // true
	console.warn("Chill bro, it’s ok to (not) have ‘;’") // optional ";"
	console.log(typeof typeof maVariable); // "string"
	console.log(myVar.method); // "[Function]"


	console.log("The i global variable has been affected:" + i)
	myVar.method(); // Will change the i value
	console.log("The i global variable has been changed by method: " + i)
}
console.log("Global variable testGlobal=" + testGlobal)
console.error("Following code will cause an error !");
console.log(myVar.method2);
