const { INTEGER, STRING, DATE, ENUM } = require ('sequelize')
const { connection } = require('../database/connection')


const StoreHouse = connection.define("storehouse", {
id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
    },

users_id: {
    type: INTEGER,
    references: {
        model: User,
        key: 'id'
    },
    allowNull: false
},

company_name: {
    type: STRING,
    allowNull: false
},

cnpj:{
    type: STRING,
    allowNull: false
},

trade_name: {
    type: STRING,
    allowNull: false
  },

email: {
    type: STRING,
    allowNull: false,
    validate: {
        isEmail: true,
    },
},

tel:{
    type: STRING,
    allowNull: true
},

cel: {
    type: STRING,
    allowNull: false
},

address: {
    type: STRING,
    allowNull: false
},

number:{
    type: STRING,
    allowNull: false
},

neighborhood: {
    type: STRING,
    allowNull: false
},

city: {
    type: STRING,
    allowNull: false
},

state: {
    type: STRING,
    allowNull: false
},

complement: {
    type: STRING,
    allowNull: true
},

latitude: {
    type: STRING,
    allowNull: true
},

longitude: {
    type: STRING,
    allowNull: true
},

status:{
    type: ENUM("Ativo", "Inativo"),
    allowNull:false,
    validate:{
        isIn: [['Ativo', 'Inativo']]
    },
    defaultValue: "Ativo"
},

},  {  underscored: true })

module.exports = { StoreHouse }