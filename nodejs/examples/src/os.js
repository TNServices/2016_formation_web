var os = require("os")


var t = 3
console.log(t)
module.exports = function toto() {
	console.log("os module is required as an " + typeof os)
	console.log("os.release is a " + typeof os.release)
	console.log("os.release() = " + os.release())
	console.log("os.name is " + os.name)
	console.log(os.name()) // Throws an error
}
