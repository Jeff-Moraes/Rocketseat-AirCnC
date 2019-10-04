const express = require("express");

const routes = express.Router();

routes.post("/users", (req, res) => {
  return res.json(req.body);
});

module.exports = routes;

// req.query = acessar query params (para filtros)
// req.perams = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação, edição)
