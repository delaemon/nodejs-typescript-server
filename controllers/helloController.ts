import * as http from "http"

export default helloController

class helloController {
    constructor() {
    }
    public get(request:http.ServerRequest, response:http.ServerResponse) {
        response.end("hello")
    }
}
