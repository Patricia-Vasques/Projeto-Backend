'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('users',{
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      name:{
        type: Sequelize.STRING,
        allowNull: false
      },

      surname: {
        type: Sequelize.STRING,
        allowNull: false
      },

      gender: {
        type: Sequelize.STRING,
        allowNull: true
      },

      dt_birth: {
        type: Sequelize.DATE,
        allowNull: false
      },

      cpf: {
        type: Sequelize.STRING,
        allowNull:false
      },

      telephone: {
        type: Sequelize.STRING,
        allowNull: true
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false
      },

      status:{
        type: Sequelize.ENUM("Ativo", "Inativo"),
        allowNull:false,
        defaultValue: 'Ativo'
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },

      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    })
  },


  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users');
   
  }
};
