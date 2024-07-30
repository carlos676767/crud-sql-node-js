const connection = require("../db/sqlConnect");

class PersonDao {
  async getAll() {
  const [rows] = await connection.query("select * from pessoas");
  return rows
  }
  async create(name, idade, sexo, cpf, nascimento){
    const query = `INSERT INTO pessoas (name, idade, sexo, cpf, nascimento) VALUES(?, ?, ?, ?, ?)`
    const [results, fields] = await connection.execute(query, [name, idade, sexo, cpf, nascimento])
    return {results, fields}
  }
};


module.exports = PersonDao