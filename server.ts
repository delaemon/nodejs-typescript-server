// commands
// - compile => tsc server --module commonjs
// - run => node server

// Node.js定義ファイルの読み込み
/// <reference path="./node-0.12.d.ts" />;
import http = require("http")
class Main {
    constructor() {
        console.log(process.argv[0])
        var server = http.createServer(
            (request:http.ServerRequest, response:http.ServerResponse) =>
            this.requestHandler(request, response))
        server.listen("5000")
    }
    private requestHandler(request, response) :void {
        response.end("Hello")
    }
}
var main:Main = new Main();
