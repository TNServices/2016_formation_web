var HTTPServer = require("http").Server

var	Loader = require("../util/Loader.js")

class Server {
	constructor(loader, port, HTTPServer) {
		this._loader = loader;
		this._httpServer = new httpServer()
		this._port = port
		this._hostname = hostname || "::"
		this._setupRoutes()
	}

	_setupRoutes() {
		this._httpServer.on("request", (req, res) => {
			switch(req.method) {
				case "GET":
					if("/messages" === req.url) {
						res.statusCode = 200
						res.end(JSON.stringify(loader.messages()))
					} else if("/users" === req.url) {
						res.statusCode = 200
						res.end(JSON.stringify(loader.users()))
					}
				break;
				case "PUT":
				break;
				case "POST":
				break
				default:
				console.error("Unhandled HTTP Method " + req.method);
				res.statusCode = 403
				res.end()
			}
		})
	}

	start() {
		this._httpServer.listen(this._port, this._hostname, () => {
			console.log("Server started on ")
		})
	}
}
