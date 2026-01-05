const database = require("mime-db");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "meu_banco",
});

connection.connect((err) => {
  if (err) {
    console.log("Erro ao conectar ao MySql:", err);
    return;
  }
  console.log("Conectado ao MySQL!");
});

module.exports = connection;
