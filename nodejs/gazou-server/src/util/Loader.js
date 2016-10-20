var fs = require("fs"),
	path = require("path")
	async = require("async")

var Serializable = require("./Serializable.js")

class Loader {


	static load(callback) {
		fs.readdir(Serializable.ROOT, (err, files) => {
			async.each(files, (item, done) => {
				
			}, (err) => {
				return callback(err, )
			})
		})
	}

}

Loader.messages = {}
Loader.users = {}

module.exports = Loader
