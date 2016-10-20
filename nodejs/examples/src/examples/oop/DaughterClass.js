var MotherClass = require("MotherClass")

class DaughterClass extends MotherClass {
	constructor(name, color) {
		super(name)
		this._color = color || "white"
	}

	get color() {
		return this._color
	}

	set color(newColor) {
		if(newColor) {
			this._color = newColor;
		}
	}

	toString() {
		return super.toString() + ", " + color
	}
}

module.exports = DaughterClass
