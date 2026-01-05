const express = require("express");
const app = express();
const port = 3001; //porta variavel do ambiente

const path = require("path");

const basepath = path.join(__dirname, "template");

app.get("/", (req, res) => {
  res.sendFile(`${basepath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
