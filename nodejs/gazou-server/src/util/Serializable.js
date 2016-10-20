var fs = require("fs"),
	path = require("path")
	process = require("process")

class Serializable {
	constructor(filename) {
		this._filepath = this.filepath(this.constructor.name, filename)
	}

	filepath(classname, filename) {
		try {
			fs.mkdirSync(path.resolve(Serializable.ROOT, classname+""))
		} catch(e) {
			if(e.code !== "EEXIST") {
				console.error(e)
			}
		}
		return path.resolve(Serializable.ROOT, classname+"", filename+"")
	}


	save(callback) {
		let clone = JSON.parse(JSON.stringify(this));
		delete clone["_filepath"]
		fs.writeFile(this._filepath, JSON.stringify(clone), callback)
	}

	static load(classname, filename, callback) {
		fs.readFile(filepath(classname, filename), (err, data) => {
			if(err) {
				throw new IOException(err)
			}
			let objData = JSON.parse(data),
				obj = new require("model/"+classname+".js")()

			async.each(objData, (key, done) => {
				obj[key] = objData[key]
			}, (err) => {
				return callback(err, obj)
			})
		})
	}
}

Serializable.ROOT = path.resolve(process.cwd(), "tmp", "storage")


try {
	fs.accessSync(Serializable.ROOT, fs.constants.W_OK)
} catch(e) {
	fs.mkdirSync(path.resolve(process.cwd(), "tmp"))
	fs.mkdirSync(Serializable.ROOT)
}

module.exports = Serializable
