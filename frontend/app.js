const axios = require("axios");
class reqHttp {
  constructor(url) {
    this.url = url;
  }

  async cadastrarUse() {
    try {
      const httpReq = await axios.post(this.url, {
        name: "carlos",
        idade: 20,
        sexo: "m",
        nascimento: "04/05/24",
        cpf: "32393566007"
      });
      console.log(httpReq.data);
    } catch (error) {
      console.log(error);
    }
  }
}

new reqHttp("http://localhost:8080/cadastrarUser").cadastrarUse()