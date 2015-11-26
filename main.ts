// commands
// - compile => tsc main --module commonjs
// - run => node main
import Server = require("./server")
var server = new Server()
server.start()
