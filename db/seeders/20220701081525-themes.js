'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Themes', [{
      desc: 'JavaScript для умных',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      desc: 'Сериалы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      desc: 'Блатная',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      desc: 'Elbrus',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
 
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes', null, {});    
  }
};
