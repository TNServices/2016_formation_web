class MotherClass {
	constructor(name) {
		this._name = name

		this._count = 0;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		this._name = newName;
	}

	increment() {
		this._count++;
	}

	toString() {
		return this._name + ", " + this._count;
	}
}

module.exports = MotherClass
