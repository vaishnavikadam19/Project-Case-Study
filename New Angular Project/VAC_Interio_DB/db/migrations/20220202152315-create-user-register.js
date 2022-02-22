'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserRegisters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Gender: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      Confirm_password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserRegisters');
  }
};