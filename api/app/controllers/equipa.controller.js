const Equipa = require("../models/equipa.model.js");

// Inserir um novo filme
exports.insert = (req, res) => {
  // Validar a request
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo da equipa deve estar definida.",
    });
  }

  // Criar uma "Equipa"
  const equipa = new Equipa({
    name: req.body.name,
    year: req.body.year || false,
    cl_titles: req.body.cl_titles || false,
    img: req.body.img || false,
  });

  // Guardar "Equipa" na base de dados
  Equipa.insert(equipa, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao inserir a equipa...",
      });
    //else res.send(data);
    else res.redirect("http://localhost/PW/TrabPratico2/website/");
  });
};

// Devolver todos as equipas (ou filtrar por determinado nome - total ou parcial)
exports.selectAll = (req, res) => {
  const name = req.query.name;

  Equipa.selectAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro na obtenção da(s) equipa(s)...",
      });
    else res.send(data);
  });
};

// Devolver uma equipa pelo seu id
exports.findById = (req, res) => {
  Equipa.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Não foi encontrado a equipa com id = ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Não foi encontrado a equipa com id = " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Atualizar uma equipa pelo seu id
exports.update = (req, res) => {
  // Validar a request
  if (!req.body) {
    res.status(400).send({
      message: "O conteúdo da equipa deve estar definido.",
    });
  }

  Equipa.updateById(req.params.id, new Equipa(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Não foi encontrado a equipa com id = ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Foi gerado um erro a atualizar a equipa com id = ${req.params.id}.`,
        });
      }
    } else res.send(data);
  });
};

// Apagar um filme pelo seu id
exports.delete = (req, res) => {
  Equipa.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Não foi encontrado a equipa com id = ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Foi gerado um erro a apagar a equipa com id = ${req.params.id}.`,
        });
      }
    } else res.send({ message: "A equipa foi eliminado com sucesso." });
  });
};

// Apagar todos os filmes da base de dados
exports.deleteAll = (req, res) => {
  Equipa.deleteAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Foi gerado um erro a apagar a totalidade das equipas.",
      });
    else res.send({ message: "Todos as equipas foram eliminados..." });
  });
};
