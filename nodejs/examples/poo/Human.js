/** Represents a Human being with a name and an age */
class Human {
	/**
	 * Creates a Human
	 * @param {string} name - The name of the Human
	 * @param {Human.Gender} gender - The gender of the Human
	 * @param {number=} age - The optional age of the Human, defaults to 0
	 */
	constuctor(name, gender, age) {
		// Create field _name ("_" means private, by convention)
		this._name = name

		this._gender = gender
		// age isn't a required parameter, if not defined, we set it as 0
		this._age = age || 0
	}

	get name() {return this._name}
	set name(name) {this._name = name}

	toString() {
		return `${this._name} is a ${this._gender} and is ${this._age} years old.`
	}
}

/**
 * The acceptable Human genders.
 * @readonly
 * @type {string}
 */
Human.Gender = {FEMALE: "Female", MALE: "Male", DEVELOPER: "Developer"}

module.exports = Human
