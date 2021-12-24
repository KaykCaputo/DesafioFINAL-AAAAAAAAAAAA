import pg from "pg";
import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.URLDB,
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
