'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [

      {

       name: 'Living Room',

       icon: '../../../../assets/images/Categories/Living_Room.png',

       createdAt: new Date(),

       updatedAt: new Date()       

     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
