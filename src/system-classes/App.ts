import * as express from "express"

export class App {
    public app : express.Application
    public port : number

    constructor(port : number, controllers : any) {
        this.app = express()
        this.port = port

        controllers.forEach((controller : any) => {
            this.app.use(controller.prefix, controller.router)
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        })
    }
}