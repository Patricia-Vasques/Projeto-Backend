'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('storehouses', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },

        users_id: {
          type: Sequelize.INTEGER,
          references: {
            model:{
            tableName: 'users'
          },
          key: 'id'
        },
          allowNull: false
        },

        company_name: {
          type: Sequelize.STRING,
          allowNull: false
        },

        cnpj: {
          type: Sequelize.STRING,
          allowNull: false
        },

        trade_name: {
          type: Sequelize.STRING,
          allowNull: false
        },

       email: {
          type: Sequelize.STRING,
          allowNull: false
        },

        tel: {
          type: Sequelize.STRING,
          allowNull: true
        },

        cel: {
          type: Sequelize.STRING,
          allowNull: false
        },

        address: {
          type: Sequelize.STRING,
          allowNull: false
        },

        number: {
          type: Sequelize.STRING,
          allowNull: false
        },

        neighborhood: {
          type: Sequelize.STRING,
          allowNull: false
        },

        city: {
          type: Sequelize.STRING,
          allowNull: false
        },

        state: {
          type: Sequelize.STRING,
          allowNull: false
        },

        complement: {
          type: Sequelize.STRING,
          allowNull: true
        },

        latitude: {
          type: Sequelize.STRING,
          allowNull: true
        },

        longitude: {
          type: Sequelize.STRING,
          allowNull: true
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
      });
     
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable('storehouses');
    
  }
};