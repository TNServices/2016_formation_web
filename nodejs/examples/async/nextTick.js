
var spot = () => {
		console.log("That's my spot.")
	};

console.log("Hi!")
process.nextTick(spot) // spot will only be called later, on the next event loop tick
console.log("Can I sit here?")
