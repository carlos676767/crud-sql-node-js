const axios = require("axios");
class reqHttp {
  constructor(url) {
    this.url = url;
  }

  async cadastrarUse() {
    try {
      const httpReq = await axios.post(this.url, {
        name: "joao",
        idade: 20,
        sexo: "m",
        nascimento: '1990-01-01',
        cpf: "3239354602",
      });
      console.log(httpReq.data);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUsers() {
    try {
      const httpDelete = await axios.delete(this.url)
      console.log(httpDelete.data);
    } catch (error) {
      console.log(error);
    }
  }

  async getPersons(){
    try {
      const httpGet = await axios.get(this.url)
      console.log(httpGet.data);
    } catch (error) {
      console.log(error)
    }
  }

  async updateDateOfBirth(){
    try {
      const httpRequestPath = await axios.put(this.url,
        {cpf: "3239354602", idade: 44})
      console.log(httpRequestPath);
    } catch (error) {
      console.log(error);
    }
  }
}

// new reqHttp("http://localhost:8080/cadastrarUser").cadastrarUse()
// new reqHttp("http://localhost:8080/deletePersons").deleteUsers()
// new reqHttp("http://localhost:8080/getPerson").getPersons()
new reqHttp("http://localhost:8080/attNascimento").updateDateOfBirth()

