module.exports = (app) => {
  const equipas = require("../controllers/equipa.controller.js");
  var router = require("express").Router();
  // Consultar todos os filmes
  router.get("/", equipas.selectAll);
  // Consultar um filme pelo id
  router.get("/:id", equipas.findById);
  // Inserir um novo filme
  router.post("/", equipas.insert);
  // Atualizar um filme pelo id
  router.put("/:id", equipas.update);
  // Apagar um filme pelo id
  router.delete("/:id", equipas.delete);
  // Apagar todos os filmes
  router.delete("/", equipas.deleteAll);
  app.use("/api/equipas", router);
};
