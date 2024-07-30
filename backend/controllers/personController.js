const PersonDao = require("../dao/PersonDao");
class PersonControler {
  async getAll(req, res) {
    const personDao = new PersonDao();
    const data = await personDao.getAll();
    res.send({ data });
  }

  async postPersons(req, res) {
    const personDao = new PersonDao();
    try {
      const { name, idade,sexo, cpf, nascimento } = req.body;
      console.log(req.body);
      const create = await personDao.create(name, idade,sexo, cpf, nascimento);
      res.send({ msg: "dados cadastrado." });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PersonControler;
