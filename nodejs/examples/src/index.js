var path = require("path");

console.log("coucou")
var os = function toto() {
	console.log("os module is required as an " + typeof os)
	console.log("os.release is a " + typeof os.release)
	console.log("os.release() = " + os.release())
	console.log("os.name is " + os.name)
	console.log(os.name()) // Throws an error
}

module.exports = {
	hello: require(path.resolve(__dirname, "hello")),
	os: require(path.resolve(__dirname, "os"))
}
