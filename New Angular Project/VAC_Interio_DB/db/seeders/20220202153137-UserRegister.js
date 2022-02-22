'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserRegisters', [

      {

       firstName: 'Arun',

       lastName: 'Vhanale',

       Phone: '987654321',

       Address: 'Swastik Colony',

       Email: 'arunvh@gamil.com',

       Gender: 'Male',

       Password: 'Arun@12',

       Confirm_password: 'Arun@12',

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
