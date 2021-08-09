import * as express from "express"

export class AuthController {
    public router : any = express.Router();

    constructor() {}

    createAccount = async (req: express.Request, res: express.Response) => {
        try {

        }
        catch(err) {
            console.log(err)
        }
    }
}