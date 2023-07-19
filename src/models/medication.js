const { INTEGER, STRING, FLOAT, ENUM, DECIMAL } = require ('sequelize')
const { connection } = require('../database/connection')


const Medication = connection.define("medication", {
    id:{
        type: INTEGER ,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      users_id: {
        type: INTEGER,
        references: {
          model:{
          tableName: 'users'
        },
        key: 'id'
      },
        allowNull: false
      },

      storehouses_id: {
        type: INTEGER,
        references: {
          model:{
          tableName: 'deposits'
        },
        key: 'id'
      },
        allowNull: false
      },

      name_med: {
        type: STRING,
        allowNull: false
      },

      name_lab: {
        type: STRING,
        allowNull: false        
      },

      description: {
        type: STRING,
        allowNull: true
      },

      dosage: {
        type: FLOAT,
        allowNull: false
      },

      dosage_unit: {
        type: ENUM('mg', 'msg', 'g', 'ml', '%', 'outro'),
        allowNull: false,
        validate: {
            isIn: [['mg', 'msg', 'g', 'ml', '%', 'outro']]
        },
      },

      type: {
        type: ENUM('controlado', 'não controlado'),
        allowNull: false,
        validate: {
          isIn: [['controlado', 'não controlado']]
        }
      },

      unit_price: {
        type: DECIMAL,
        allowNull: false
      },

      quantity: {
        type: INTEGER,
        allowNull: false
      },
}, {  underscored: true, paranoid: true })

Medication.associate = (models) => {
    Medication.belongsTo(models.User, {
        foreingkey: "users_id",
        allowNull: false
    }),
    Medication.belongsTo(models.StoreHouse, {
    foreingkey: "storehouses_id",
    allowNull: false
    })
}

module.exports = { Medication }