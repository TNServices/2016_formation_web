var User = require("./model/User.js")


let u = new User("toto")

console.log(u)
console.log(JSON.stringify(u))

u.save((err) => {
	if(err) {
		return console.error(err);
	}
	console.log("User Saved.")
})
