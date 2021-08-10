import { App } from "./App"
import { AuthController } from "./controllers/auth.controller"
import { HubController } from "./controllers/hub.controller"

var app = new App(3000, [
    new AuthController(),
    new HubController()
])
app.listen()