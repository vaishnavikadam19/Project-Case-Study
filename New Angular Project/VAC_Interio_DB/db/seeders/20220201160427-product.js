'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [

      {

       productName: 'Lamp',

       description: 'beautiful-light-lamp-bulb-decoration-interior-room',

       price: 5000,

       image:'../../../../assets/images/beautiful-light-lamp-bulb-decoration-interior-room (1).jpg',

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
