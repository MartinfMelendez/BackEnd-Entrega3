import express from "express"
import dotenv from "dotenv"
import env from "./config/env.config.js"
import router from "./router/router.js"

dotenv.config()
const app = express()
const port = env.PORT

app.use(express.json())

app.use("/api", router)

app.listen(port, () => {
    console.log(`Server is running - http://localhost:${port}/`)
})