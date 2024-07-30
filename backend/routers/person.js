const router = require('express').Router()
const PersonController = require("../controllers/personController")
const personController = new PersonController()

router.get("/getPerson", personController.getAll)
router.post("/cadastrarUser", personController.postPersons)
router.delete("/deletePersons", personController.limparUsuarios)
router.put("/attNascimento", personController.attCpf)
module.exports = router
