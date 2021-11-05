import dbConfig from "./dbConfig";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password, {
  host: dbConfig.host,
  dialect: 'postgres'
})

export default sequelize;
