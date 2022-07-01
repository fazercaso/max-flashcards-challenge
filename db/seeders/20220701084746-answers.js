module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [{
      question_id: 1, // js для умных
      answer: '11',
      createdAt: new Date(),
      updatedAt: new Date(),
      }, {
        question_id: 2, // js для умных
        answer: '6',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        question_id: 3, // js для умных
        answer: '6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        question_id: 4, // //Serial topic
        answer: 'Все',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        question_id: 5, // //Serial topic
        answer: 'Теория большого взрыва',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        question_id: 6, // //Serial topic
        answer: 'Боярский',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        question_id: 7, //Blatnay
        answer: 'Дубинка',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        question_id: 8, //Blatnay
        answer: 'Нет',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        question_id: 9, //Blatnay
        answer: 'Преступник',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        question_id: 10, ////Elbrus
        answer: 'Main',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        question_id: 11, ////Elbrus
        answer: 'В мойку',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        question_id: 12, ////Elbrus
        answer: 'Лейле',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
   
  }
};
