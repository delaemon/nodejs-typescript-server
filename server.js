// commands
// - compile => tsc server --module commonjs
// - run => node server
// Node.js定義ファイルの読み込み
/// <reference path="./node-0.12.d.ts" />;
var http = require("http");
var Main = (function () {
    function Main() {
        var _this = this;
        console.log(process.argv[0]);
        var server = http.createServer(function (request, response) {
            return _this.requestHandler(request, response);
        });
        server.listen("5000");
    }
    Main.prototype.requestHandler = function (request, response) {
        response.end("Hello");
    };
    return Main;
})();
var main = new Main();
