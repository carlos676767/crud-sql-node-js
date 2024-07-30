const PersonDao = require("../dao/PersonDao");
class PersonControler {
  async getAll(req, res) {
    const personDao = new PersonDao();
    const data = await personDao.getAll();
    if (data.length == 0) {
      res.send({msg: "There is no data in the database, add data.", dados: false}).status(204)
      return
    }
    res.send({dados: data});
  }

  async postPersons(req, res) {
    try {
      const personDao = new PersonDao();
      const { name, idade,sexo, cpf, nascimento } = req.body;
      const create = await personDao.create(name, idade,sexo, cpf, nascimento);
      res.status(200).send({ msg: "dados cadastrado.", status: 200 });
    } catch (error) {
      res.send({msg: "error 404 unexpected"}).status(404)
    }
  }

  async limparUsuarios(req, res){
    try {
      const person = new PersonDao()
      const busque = await person.getAll()
      const deleteUsers = await person.removedaAll()
      if (busque.length == 0) {
        res.send({msg: "there are no users to clean up"}).status(400)
        return
      }
      res.send({msg: deleteUsers})
    } catch (error) {
     res.send({msg: "error 404 unexpected"}).status(404)
    }
  }

  async attCpf(req, res){


   
    try {
      const {cpf,  idade} = req.body
      if (!cpf && !idade) {
        res.send({msg: "Fill in the fields to avoid errors"}).status(200)
        return
      }
      const personDao = new PersonDao();
      const data = await personDao.updateDate(idade, cpf)
      res.send({msg: "age updated successfully"}).status(200)
    } catch (error) {
      res.status(404).send({msg: "error expected on the server, try again."})
    }
  }
}

module.exports = PersonControler;
