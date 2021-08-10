import * as express from "express"
import { User } from "../models/User"
import { Feed } from "../models/Feed"

export class HubController {
    public prefix : string = "hub"
    public router : express.Router = express.Router()

    constructor() {
        this.router.get("/feed-posts", this.fetchFeed)
    }

    fetchFeed = async (req : express.Request, res : express.Response) => {
        try {
            const feed = await Feed.findAll({
                limit: 10,
                include: [{
                    model: User.scope('public'), as: "User"
                }]
            }).then((feed_posts : any) => {
                res.json(feed_posts)
            })
        }
        catch(err) {
            console.log(err)
        }
    }
}