const express = require("express");
const app = express();
const port = 3001; //porta variavel do ambiente

const path = require("path");

const basepath = path.join(__dirname, "template");

//buscando user pelo id
app.get("/users/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Estamos buscando pelo usuario ${id}`);

  res.sendFile(`${basepath}/users.html`);
});


app.get("/", (req, res) => {
  res.sendFile(`${basepath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
