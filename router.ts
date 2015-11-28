import http = require("http")
import url = require("url")
export = Router

class Router {

    private routings:Array<Routing> = []

    constructor() {
        this.routings.push(new Routing("/hello", "get", "helloController.get"))
    }

    public exec(request:http.ServerRequest, response:http.ServerResponse) {
        var len = Object.keys(this.routings).length
        for (var i = 0; i < len; i++) {
            var m:Routing = this.routings[i]
            if (m.getPath() == request.url) {
                var tmp = m.getAction().split("\.")
                var clazz = tmp[0]
                var action = tmp[1]
                var con = require("./controllers/" + clazz)
                new con()[action](request, response)
                console.log("routing path: %s, action: %s", m.getPath(), m.getAction())
                break;
            }
        }
    }
}

class Routing {
    private path:string
    private method:string
    private action:string
    constructor(path:string, method:string, action:string) {
        this.validatePath(path)
        this.validateMethod(method)
        this.validateAction(action)
        this.path = path
        this.method = method
        this.action = action
    }

    public getPath() {
        return this.path
    }

    public getAction() {
        return this.action
    }

    private validatePath(path: string) {
        if (false) {
            throw Error(`"invalid routing path. ${path}"`)
        }
    }

    private validateMethod(method: string) {
        if (false) {
            throw Error(`"invalid routing method. ${method}"`)
        }
    }

    private validateAction(action: string) {
        if (false) {
            throw Error(`"invalid routing action. ${action}"`)
        }
    }
}
