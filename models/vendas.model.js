import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Clientes from "./cliente.model";
import Livros from "./livro.model.js";

const Vendas = db.define("vendas", {
  venda_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  valor: {
    type: Sequelize.NUMBER,
    allowNull: false,
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  cliente_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  livro_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
Vendas.belongsTo(Clientes, { foreignKey: "cliente_id" });
Vendas.belongsTo(Livros, { foreignKey: "livro_id" });

export default Vendas;
