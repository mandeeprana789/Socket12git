
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];
var config = {}
const db = {};


if(env === "development") config = { "host": process.env.DB_DEV_HOST , "username": process.env.DB_DEV_USER , "password": process.env.DB_DEV_PASSWORD , "database": process.env.DB_DEV_DATABASE , "dialect":"mysql"}
if(env === "production") config = { "host": process.env.DB_PRO_HOST , "username": process.env.DB_PRO_USER , "password": process.env.DB_PRO_PASSWORD , "database": process.env.DB_PRO_DATABASE , "dialect":"mysql"}

let sequelize;
sequelize = new Sequelize(config)
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
console.log("kkkkkkkkkkk")
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;