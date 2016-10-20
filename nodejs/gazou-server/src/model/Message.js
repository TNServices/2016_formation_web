var User = require("./User.js"),
	Serializable = require("../util/Serializable.js")

class Message extends Serializable {
	constructor(content, user) {
		super(++Message.messageCount)
		this._id = messageCount
		this._content = content
		this._user = user
	}

	get id() {
		return this._id
	}

	get content() {
		return this._content
	}

	get user() {
		return this._user
	}

	static save(callback) {
		//TODO with User ref
	}

	static load(id, callback) {
		super.load(Message.constructor.name, id, callback)
	}
}


Message.messageCount = 0

module.exports = Message
