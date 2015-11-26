import http = require("http")
export = Router

class Router {
    public static exec(request:http.ServerRequest, response:http.ServerResponse) {
        response.end("Hello")
    }
}
