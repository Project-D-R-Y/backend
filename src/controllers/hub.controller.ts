import * as express from "express"

export class HubController {
    public prefix : string = "/hub"
    public router : express.Router = express.Router()

    constructor() {}
}