var EventEmitter = require("events").EventEmitter

class Obj extends EventEmitter {
	doStuff() {
		// do Really nice async stuff
		this.emit("myEventName", "myEventData")
	}
}

let obj = new Obj()
// Register listeners before doing stuff, otherwise you won't be noticed
obj.on("myEventName", (data) => {
	console.log("Event 'myEventName' occured!\n"+data);
})

obj.doStuff();
