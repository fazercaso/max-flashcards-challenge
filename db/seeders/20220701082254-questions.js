module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [{
      theme_id: 1, // js для умных
      question: 'Какой будет резултат console.log(1+"1")',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_id: 1, // js для умных
      question: 'Что выведется в консоль "9" - 3?',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_id: 1,// js для умных
      question: 'Что выведется в консоль 9 +- 3?',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_id: 2, //Serial topic
      question: 'Кто по вечерам смотрит "Смычок"?',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_id: 2,//Serial topic
      question: 'В каком сериале есть персонаж по имени Шелдон?',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_id: 2,//Serial topic
      question: 'Как зовут главного героя сериала Мушкетеры?',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_id: 3, //Blatnay
      question: 'Что такое "Татьянка"?',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_id: 3, //Blatnay
      question: 'Верно ли утверждение о том что писать маляву вертухаю - плохо?',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_id: 3, //Blatnay
      question: 'Что значит мурчащий на жаргоне?',
      createdAt: new Date(),
      updatedAt: new Date(),  
    }, {
      theme_id: 4, //Elbrus
      question: 'Первый пуш делаем куда?',
      createdAt: new Date(),
      updatedAt: new Date(), 
    }, {
      theme_id: 4, //Elbrus
      question: 'Куда нужно класть стаканы в конце дня?',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      theme_id: 4, //Elbrus
      question: 'Кому обязательно нужно говорить спасибо за атмосферу в кампусе?',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});   
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
    
  }
};
