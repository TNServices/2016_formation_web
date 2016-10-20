var Serializable = require("../util/Serializable.js")

class User extends Serializable {
	constructor(name) {
		super(++User.userCount)
		this._id = User.userCount
		this._name = name
	}

	get id() {
		return this._id
	}

	get name() {
		return this._name;
	}

	set name(name) {
		this._name = name;
	}

	static load(id, callback) {
		super.load(User.constructor.name, callback)
	}
}

User.userCount = 0;

module.exports = User;
