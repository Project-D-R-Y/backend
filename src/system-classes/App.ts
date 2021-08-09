import * as express from "express"

export class App {
    public app : express.Application
    public port : number

    constructor(port : number) {
        this.app = express()
        this.port = port
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        })
    }
}