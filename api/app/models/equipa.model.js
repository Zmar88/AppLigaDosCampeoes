const sql = require("./db.js");
// construtor
const Equipa = function (equipa) {
  this.name = equipa.name;
  this.year = equipa.year;
  this.cl_titles = equipa.cl_titles;
  this.img = equipa.img;
};
Equipa.insert = (newEquipa, result) => {
  sql.query("INSERT INTO equipas SET ?", newEquipa, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Equipa inserida: ", { id: res.insertId, ...newEquipa });
    result(null, { id: res.insertId, ...newEquipa });
  });
};
Equipa.findById = (id, result) => {
  sql.query(`SELECT * FROM equipas WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Equipa Encontrada: ", res[0]);
      result(null, res[0]);
      return;
    }
    // no caso do filme não ser encontrado
    result({ equipa: "not_found" }, null);
  });
}; // Este método, no caso de não receber qualquer nome de filme devolve todos
// os filmes, caso contrário filtra o(s) resultado(s) pelo nome do filme (total ou parcial)
Equipa.selectAll = (name, result) => {
  let query;
  query = "SELECT * FROM equipas";
  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Filmes: ", res);
    result(null, res);
  });
};
Equipa.updateById = (id, equipa, result) => {
  sql.query(
    "UPDATE equipas SET name = ?, year = ?, cl_titles = ? img = ? WHERE id = ?",
    [equipa.name, equipa.year, equipa.cl_titles, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Movie
        result({ equipa: "not_found" }, null);
        return;
      }
      console.log("Equipa Atualizada: ", { id: id, ...equipa });
      result(null, { id: id, ...equipa });
    }
  );
};
Equipa.delete = (id, result) => {
  sql.query("DELETE FROM equipas WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Movie with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("Equipa eliminada com o id: ", id);
    result(null, res);
  });
};
Equipa.deleteAll = (result) => {
  sql.query("DELETE FROM equipas", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`Eliminada(s) ${res.affectedRows} equipa(s)`);
    result(null, res);
  });
};
module.exports = Equipa;
