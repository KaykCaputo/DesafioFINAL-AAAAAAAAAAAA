import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Autores from "./autor.model.js";

const Livros = db.define("livros", {
  livro_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  valor: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  estoque: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  autor_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
Livros.belongsTo(Autores, { foreignKey: "autor_id" });

export default Livros;
