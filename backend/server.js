const express = require("express")
const api = express()
api.get("/", (req, res) => {
    res.send("ola mundo")
})








const port = 8080
api.listen(port, () => {
    console.log("server running on port 8080");
})