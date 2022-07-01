const React = require('react');
const Layout = require('./Layout');

module.exports = function Home() {
  return (
    <Layout>
      <div className="content">
        <h2 className="content__title"> Flashcard Decks</h2>
        <h3 className="content__subtitle">Choose your topic:</h3>
        <div className="content__topics">
          <ul className="content__list">
            <li className="content__item"><a className="content__item-link" id="1" href="/js">JavaScript для умных</a></li>
            <li className="content__item"><a className="content__item-link" id="2" href="/serial">Сериалы</a></li>
            <li className="content__item"><a className="content__item-link" id="3" href="/blat">Блатная</a></li>
            <li className="content__item"><a className="content__item-link" id="4" href="/elbrus">Elbrus</a></li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
