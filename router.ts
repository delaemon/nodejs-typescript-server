import http = require("http")
import url = require("url")
export = Router

class Router {
    private map:Array<Routing> = []
    public static exec(request:http.ServerRequest, response:http.ServerResponse) {
        response.end(request.url)
    }
}

class Routing {
    private path:string
    private action:string
    private method:string
    constructor(path:string, action:string, method:string) {
        this.validatePath(path)
        this.validateAction(action)
        this.validateMethod(method)
        this.path = path
        this.action = action
        this.method = method
    }
    private validatePath(path: string) {
        if (false) {
            throw Error(`"invalid routing path. ${path}"`)
        }
    }
    private validateAction(action: string) {
        if (false) {
            throw Error(`"invalid routing action. ${action}"`)
        }
    }
    private validateMethod(method: string) {
        if (false) {
            throw Error(`"invalid routing method. ${method}"`)
        }
    }
}
