const { INTEGER, STRING, DATE, ENUM } = require ('sequelize')
const { connection } = require('../database/connection')

const User = connection.define("user", {
    id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

    name: {
        type: STRING,
        allowNull:false,
        validate:{
            len: {args: [2, 20], msg: "Nome precisa ter entre 2 a 20 char."},
        },
    },

    surname: {
        type:STRING,
        allowNull:false,
        validate:{
            len: {args: [2, 20], msg: "Sobrenome precisa ter entre 2 a 20 char."}
        },
    },

    gender: {
        type: STRING,
        allowNull: true,
    },

    dt_birth:{
        type: DATE,
        allowNull: false,
        validate: {
            isDate: true,
        },
    },

    cpf: {
        type: STRING,
        allowNull: false,
        validate:{
            len: {args: [11, 11], msg: "CPF precisa ter 11 char."},
        },
    },

    telephone: {
        type: STRING,
        allowNull: true,
    },

    email: {
        type: STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },

    password:{
        type: STRING,
        allowNull: false,
        validate: {
            len: {args: [8, 15], msg: "Senha precisa ter entre 8 a 15 char."},
            strongPassword(value) {
                const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]+$/;;
                if (!strongPasswordRegex.test(value)) {
                  throw new Error(
                    'Senha deve conter pelo menos 1 letra maiúscula, 1 número e 1 caracteres.'
                  );
                }
            }
        },
    },
    
    status:{
        type: ENUM("Ativo", "Inativo"),
        allowNull:false,
        validate:{
            isIn: [['Ativo', 'Inativo']]
        },
        defaultValue: "Ativo"
    },
    
},  {  underscored: true, paranoide: true })

User.associate = (models) => {
    User.belongsTo(models.StoreHouse, {
        foreingkey: "storehouses_id",
        allowNull: false
        }),
        
        User.hasMany(models.Medication, {
            foreingkey: "medications_id",
            allowNull: false
        })
    }
module.exports = { User }