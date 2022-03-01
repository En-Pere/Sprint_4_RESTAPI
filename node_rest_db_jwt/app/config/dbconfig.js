const Sequelize = require("sequelize");

const dbdata = require("./dbdata");

const jocdedausmodel = require("../models/jocdedausmodel")
const usermodel = require("../models/usermodel");


const sequelize = new Sequelize(dbdata.DB, dbdata.USER, dbdata.PASSWORD, {
  host: dbdata.HOST,
  dialect: dbdata.dialect,
});

const Joc = jocdedausmodel(sequelize, Sequelize);
const User = usermodel(sequelize, Sequelize);

//CREATE TABLE IF NOT EXISTS
sequelize.sync({ force: false})
  .then(() => {
    console.log("Tablas sincronizadas")
  });

//DROP ALL TABLES
// sequelize.drop()
// .then(() => {
//   console.log("Tablas eliminadas")
// });

module.exports = {
  Joc,
  User
};

