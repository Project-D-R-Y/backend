import * as express from "express"
import * as bcrypt from "bcrypt"

import { User } from "../models/User"

declare module 'express-session' {
    export interface SessionData {
      user_id: { [key: number]: any };
    }
  }

export class AuthController {
    public router : any = express.Router();
    public prefix : string = "auth"

    constructor() {
        this.router.post("/create-account", this.createAccount)
    }

    createAccount = async (req: express.Request, res: express.Response) => {
        try {
            if(typeof req.session.user_id != "undefined") {
                return res.json({
                    error: true,
                    message: "Forbidden"
                })
            }

            if(req.body.password.length < 8) {
                return res.json({
                    error: true,
                    message: "Your password must be at least 8 characters long."
                })
            }

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            await User.create({
                Username: req.body.username,
                Password: hash,
                Email: req.body.email
            })

            return res.json({
                error: false
            })
        }
        catch(err) {
            return res.json({
                error: true,
                message: err.errors[0].message
            })
        }
    }
}