const React = require('react');
const Layout = require('./Layout');

module.exports = function LayoutCards({ topic, question }) {
  return (
    <Layout>
      <main className="content">
        <h2 className="content__title">{topic}</h2>
        <div className="content__gamecard">
          <p className="content__subtitle content__question">
            {question}
          </p>
          <form action="#" id="content__card-form">
            <span className="content__question-sub">Enter your guess here:</span>
            <input type="text" id="content__card-input" placeholder="Write here" />
            <input type="submit" id="content_card-button" value="Let`s check!" />
          </form>
        </div>
      </main>
    </Layout>
  );
};
