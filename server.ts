/// <reference path="./node-0.12.d.ts" />;
import http = require("http")
import Router = require("./router")
export = Server

class Server {

    private port = 5000
    private server :http.Server

    constructor() {
        this.parse()
        var router: Router = new Router
        this.server = http.createServer(
            (request:http.ServerRequest, response:http.ServerResponse) =>
            router.exec(request, response))
    }

    private parse() {
        var opt = process.argv.slice(2)
        var reEq = /=/g
        var skip = false
        for (var i in opt) {
            i = +i
            if (skip) {
                skip = false
                continue
            }
            if (reEq.test(opt[i])) {
                var tmp = opt[i].split("=")
                var key = tmp[0].replace(/-/g,"")
                var val = tmp[1]
                if (this.hasOwnProperty(key)) {
                    this[key] = val
                }
            } else {
                var key = opt[i].replace(/-/g,"")
                var val = opt[i+1]
                if (this.hasOwnProperty(key)) {
                    this[key] = val
                }
                skip = true
            }
        }
    }

    public start() {
        console.log("server start. port = " + this.port)
        this.server.listen(this.port)
    }
}
