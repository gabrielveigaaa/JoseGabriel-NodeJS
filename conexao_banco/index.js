const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());

//inserir usuario
app.post("/users", (req, res) => {
  const { nome, idade } = req.body;

  const sql = "INSERT INTO users (nome, idade) VALUES (?, ?)";
  db.query(sql, [nome, idade], (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(201).json({ message: "Usuário criado com sucesso!" });
  });
});

//listar usuário
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
});

// editar cadastro usuario por ID
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { nome, idade } = req.body;

  const sql = "SELECT ";
  db.query(sql, [nome, idade, id], (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json({ message: "Usuário atualizado com sucesso!" });
  });
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM users WHERE id=?";
});

app.get("/", (req, res) => {
  res.send("API rodando com MySQL");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
