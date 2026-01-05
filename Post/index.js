const express = require("express");
const app = express();
const port = 3001; //porta variavel do ambiente

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const path = require("path");
const basepath = path.join(__dirname, "template");

app.get("/users/add", (req, res) => {
  res.sendFile(`${basepath}/usersForms.html`);
});

app.post("/users/save", (req, res) => {
  console.log(req.body);
  const nome = req.body.nome;
  const idade = req.body.idade;

  console.log(`O usuário se chama ${nome} e tem ${idade} anos.`);
  res.sendFile(`${basepath}/usersForms.html`);
});

//buscando user pelo id
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Estamos buscando pelo usuario ${id}`);

  res.sendFile(`${basepath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basepath}/usersForms.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
