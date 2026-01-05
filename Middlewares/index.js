const express = require("express");
const app = express();
const port = 3001; //porta variavel do ambiente

const path = require("path");

const basepath = path.join(__dirname, "template");

const checkauth = function (req, res, next) {
  req.checkStatus = true;
  if (req.checkStatus) {
    console.log(`Está logado, pode continuar.`);
    next();
  } else {
    console.log(`Não está logado, faça login!`);
    next();
  }
};

app.use(checkauth);

app.get("/", (req, res) => {
  res.sendFile(`${basepath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
