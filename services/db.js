import pg from "pg";
import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "URI do banco de dados",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
