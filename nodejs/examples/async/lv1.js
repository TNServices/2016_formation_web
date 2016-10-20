var simple = (callback) => {
	console.log("Yo dawg!");
	return callback();
}

console.log("Callback is love, callback is life.")
simple(() => {
	console.log("I hear you like callbacks.")
})
console.log("But I don't like callbacks, man.")
