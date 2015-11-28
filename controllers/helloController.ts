import http = require("http")

export = helloController

class helloController {
    constructor() {
    }
    public get(request:http.ServerRequest, response:http.ServerResponse) {
        response.end("hello")
    }
}
