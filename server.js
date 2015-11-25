// commands
// - compile => tsc server --module commonjs
// - run => node server
// Node.js定義ファイルの読み込み
/// <reference path="./node-0.12.d.ts" />;
var http = require("http");
var Main = (function () {
    function Main() {
        var _this = this;
        this.port = 5000;
        this.parse();
        var server = http.createServer(function (request, response) {
            return _this.requestHandler(request, response);
        });
        console.log(this.port);
        server.listen(this.port);
    }
    Main.prototype.parse = function () {
        var opt = process.argv.slice(2);
        var reEq = /=/g;
        var skip = false;
        for (var i in opt) {
            i = +i;
            if (skip) {
                skip = false;
                continue;
            }
            if (reEq.test(opt[i])) {
                var tmp = opt[i].split("=");
                var key = tmp[0].replace(/-/g, "");
                var val = tmp[1];
                this[key] = val;
            }
            else {
                var key = opt[i].replace(/-/g, "");
                var val = opt[i + 1];
                this[key] = val;
                skip = true;
            }
        }
    };
    Main.prototype.requestHandler = function (request, response) {
        response.end("Hello");
    };
    return Main;
})();
var main = new Main();
