var fs = require("fs"),
	path = require("path")

// Callback will be called once file is read
var readTxtFile = (filename, callback) => {
		if(!filename) {
			return callback("No filename")
		}
		if(!filename.endsWith(".txt")) {
			filename += ".txt"
		}
		console.log("\t[Reading content of " + filename + "]")
		fs.readFile(path.resolve(__dirname, filename), {encoding: "utf8"}, (err, data) => {
			if(err) {
				return callback(err) // Return callback with error as first param
			}
			return callback(null, data) // First param is null ==> There is no error
		})
	},
	writeTxtFile = (filename, data, callback) => {
		if(!filename) {
			return callback("No filename")
		}
		if(!filename.endsWith(".txt")) {
			filename += ".txt"
		}
		console.log("\t[Writing data to " + filename + "]")
		// Writing with no posteriori treatment, we can give callbaack directly
		fs.writeFile(path.resolve(__dirname, filename), data, callback)
	},
	// Will read and write asynchronously
	readWriteTxtFile = (source, destination, callback) => {
		console.log("Yo doge!")
		readTxtFile(source, (readErr, data) => {
			if(readErr) {
				return callback(readErr)
			}
			console.log("I hear you like callbacks.")
			writeTxtFile(destination, data.replace("read", "written"), (writeErr) => {
				if(writeErr) {
					return callback(writeErr)
				}
				console.log("So here are your callbacks.")
				return callback()
			})
		})
	};

// Actually calling the readWriteTxtFile function
readWriteTxtFile("asyncRead", "asyncWrite", (err) => {
	if(err) {
		console.error(err)
	}
	console.log("Wow. Very callback. Many thankful. Much doge")
});
