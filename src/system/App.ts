import * as express from "express"
import * as expressSession from "express-session"

import * as cors from "cors"
import * as cookieParser from "cookie-parser"

import { Sequelize } from "sequelize-typescript"
const SessionStore = require("express-session-sequelize")(expressSession.Store)

export class App {
    public app : express.Application
    public sequelize : Sequelize
    public port : number

    constructor(port : number, controllers : any) {
        this.sequelize = new Sequelize({
            database: "ppbg",
            dialect: "mysql",
            username: "root",
            password: "",
            models: [__dirname + "/models"]
        })

        this.app = express()
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(expressSession({
            secret: '',
            store: new SessionStore({
                db: this.sequelize
            }),
            resave: false,
            saveUninitialized: true
        }))

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