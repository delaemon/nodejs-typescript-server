// commands
// - compile => tsc server --module commonjs
// - run => node server

// Node.js定義ファイルの読み込み
/// <reference path="./node-0.12.d.ts" />;
import http = require("http")
class Main {
    private port = 5000
    constructor() {
        this.parse()
        var server = http.createServer(
            (request:http.ServerRequest, response:http.ServerResponse) =>
            this.requestHandler(request, response))
        server.listen(this.port)
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
                this[key] = val
            } else {
                var key = opt[i].replace(/-/g,"")
                var val = opt[i+1]
                this[key] = val
                skip = true
            }
        }
    }
    private requestHandler(request, response) :void {
        response.end("Hello")
    }
}
var main:Main = new Main();
