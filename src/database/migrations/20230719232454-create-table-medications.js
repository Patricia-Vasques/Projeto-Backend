'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('medications', { 
        id:{
          type: Sequelize.INTEGER ,
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

        storehouses_id: {
          type: Sequelize.INTEGER,
          references: {
            model:{
            tableName: 'storehouses'
          },
          key: 'id'
        },
          allowNull: false
        },

        name_med: {
          type: Sequelize.STRING,
          allowNull: false
        },

        name_lab: {
          type: Sequelize.STRING,
          allowNull: false        
        },

        description: {
          type: Sequelize.STRING,
          allowNull: true
        },

        dosage: {
          type: Sequelize.FLOAT,
          allowNull: false
        },

        dosage_unit: {
          type: Sequelize.ENUM('mg', 'msg', 'g', 'ml', '%', 'outro'),
          allowNull: false
        },

        type: {
          type: Sequelize.ENUM('controlado', 'não controlado'),
          allowNull: false
        },

        unit_price: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },

        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false
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
   
      await queryInterface.dropTable('medications');
     
  }
};