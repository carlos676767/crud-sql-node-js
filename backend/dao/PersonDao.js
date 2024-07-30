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

  async removedaAll(){
    const removed = await connection.query("TRUNCATE TABLE pessoas")
  }

  async updateDate(idade, cpf){
    const query = `UPDATE pessoas SET idade =${idade} WHERE cpf = ${cpf}`
    const update = await connection.execute(query)
  }
};


module.exports = PersonDao