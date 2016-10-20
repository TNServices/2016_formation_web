var Human = require("./Human.js")

class Developer extends Human {
	constructor(name, age) {
		super(name, Human.Gender.DEVELOPER, age)
		this._skills = []
	}

	addSkill(skillName) {
		this._skills.push(skillName)
	}

	toString() {
		return super.toString() + "It masters " + (this._skills.length) ? this._skills.join(", ") : "nothing" + "."
	}
}
