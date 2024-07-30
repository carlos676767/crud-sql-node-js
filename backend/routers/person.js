const router = require('express').Router()
const PersonController = require("../controllers/personController")
const personController = new PersonController()

router.get("/", personController.getAll)
router.post("/cadastrarUser", personController.postPersons)
module.exports = router
