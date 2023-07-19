const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/datatbase.config')

const connection = new Sequelize(databaseConfig)

module.exports = { connection }