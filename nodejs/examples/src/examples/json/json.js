var object = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 6
}
console.log(typeof object) // We have an plain javascript object

var json = JSON.stringify(object)
console.log(typeof json) // We have a string

console.log("This should have quote: " + json) // display the string (with each key quoted)
console.log("This shouldn't:  " + object) // console.log isn't always nice with us
console.log(object)

var fs = require("fs"); // we want to require the file system module, embeded in node.js

fs.readFile("example.json", {"encoding": "utf8"}, (err, data) => { // Asynchronous read of the file.
	if(err) { // ALWAYS check for errors!
		return console.error(data) // And don't forget to handle/display the error...
	}
	console.log(typeof data); // We read a file, it's a string (YOU DON'T SAY?!)
	console.log(data)
	fs.writeFile("example.json", json, (err) => { // async write
		if(!err) {
			console.log("Done writing 'example.json'!") // (y) Nice job!
		}
	})
})
