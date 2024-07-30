const sql = require("mysql2/promise");
const connectSql = sql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "pessoas",
});

module.exports = connectSql;