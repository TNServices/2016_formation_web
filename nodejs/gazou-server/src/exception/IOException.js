var GazouException = require("./GazouException.js")

class IOException extends GazouException {
	constructor(message) {
		super(message)
	}
}
