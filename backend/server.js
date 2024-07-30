const express = require("express")
const api = express()
const bodyParser = require("body-parser")
api.use(bodyParser.json())
const personRouter = require("./routers/person")

api.use(personRouter)
const port = 8080
api.listen(port, () => {
    console.log("server running on port 8080");
})