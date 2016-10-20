var fs = require("fs"),
	path = require("path")

/*
 * Callback will be called once file is read
 * But done should be called only at the end of the callback
 */
var readTxtFileName = (filename, callback, done) => {
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
			return callback(null, data, done) // First param is null ==> There is no error
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
	readWriteTxtFile = (source, destination, callback) => {
		console.log("Yo dawg!")
		readTxtFileName(source, (readErr, data, done) => {
			if(readErr) {
				return callback(readErr) // Read failed, we
			}
			console.log("I hear you like callbacks.")
			writeTxtFile(destination, data.replace("read", "written"), (writeErr) => {
				return done(writeErr, data)  // We can give error here anyway, since we don't have specific success handling
			})
		}, (err, data) => {
			if(err) {
				console.error("Errors occured when handing data:");
				console.error(data)
				return callback(err, data)
			}
			console.log("So I put callbacks in your callbacks so you can call them back.")
			return callback(null, data)
		})
	};

// This is getting out of hand
readWriteTxtFile("asyncRead", "asyncWrite", (err, data) => {
	if(err) {
		console.error(err)
	}
	console.log("Wow. Very callback. Many thankful. Much doge")
});
