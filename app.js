require('@babel/register');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const express = require('express');
const logger = require('morgan');
const path = require('path');
const Home = require('./view/Home');

const {
  Question
} = require('./db/models');
const {
  Theme
} = require('./db/models');
const {
  Answer
} = require('./db/models');
const Cards = require('./view/Cards');
const { url } = require('inspector');

const app = express();
const PORT = process.env.PORT ?? 3000;

// middlewares morgan + express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  const main = React.createElement(Home);
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.get(`/js/:id`, async (req, res) => {
  // console.log({req.params})
  const quest = await Question.findOne({
    where: {
      theme_id: 1,
      id: req.params.id,
    }
  });
  const topic = await Theme.findByPk(1);
  const topicName = topic.desc;
  const questText = quest.question;

  const card = React.createElement(Cards, {
    topicName,
    questText
  })
  const html = ReactDOMServer.renderToStaticMarkup(card);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.get(`/serial/:id`, async (req, res) => {
  // console.log({req.params})
  const quest = await Question.findOne({
    where: {
      theme_id: 2,
      id: req.params.id,
    }
  });
  const topic = await Theme.findByPk(2);
  const topicName = topic.desc;
  const questText = quest.question;

  const card = React.createElement(Cards, {
    topicName,
    questText
  })
  const html = ReactDOMServer.renderToStaticMarkup(card);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.get(`/blat/:id`, async (req, res) => {
  // console.log({req.params})
  const quest = await Question.findOne({
    where: {
      theme_id: 3,
      id: req.params.id,
    }
  });
  const topic = await Theme.findByPk(3);
  const topicName = topic.desc;
  const questText = quest.question;

  const card = React.createElement(Cards, {
    topicName,
    questText
  })
  const html = ReactDOMServer.renderToStaticMarkup(card);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.get(`/elbrus/:id`, async (req, res) => {
  // console.log({req.params})
  const quest = await Question.findOne({
    where: {
      theme_id: 4,
      id: req.params.id,
    }
  });
  const topic = await Theme.findByPk(4);
  const topicName = topic.desc;
  const questText = quest.question;

  const card = React.createElement(Cards, {
    topicName,
    questText
  })
  const html = ReactDOMServer.renderToStaticMarkup(card);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.post(`/js/:id`, async (req, res) => { 
  const answerUsers = req.body.answer; 
  // const {
  //   answer
  // } = req.body;+ 'BODY'

  // const ans = await Answer.findOne({
  //   where: {
  //     question_id: req.params.id
  //   }
  // })
  // console.log(ans);
  // if (answer === ans) {
  //   return res.send('???????????? ??????????!')
  // } else {
  //   return res.send('?????????? ???? ????????????????????')
  // }
})

// app.get('/cards', (req,res) => {
//   const main = React.createElement(Home, { title: 'Express' });
//   const html = ReactDOMServer.renderToStaticMarkup(main);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}, my Lord`);
});
