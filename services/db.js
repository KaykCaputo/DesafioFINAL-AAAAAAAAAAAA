import pg from "pg";
import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://aavyypam:pu0kmUL8YQK6RCAF2v1RA4ocyAwzP_1S@kesavan.db.elephantsql.com/aavyypam",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
