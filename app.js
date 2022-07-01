require('@babel/register');
const ReactDOMServer = require('react-dom/server');
const React = require('react');


const express = require ('express');
const logger = require('morgan');
const path = require('path');
const Home = require('./view/Home');


const app = express();
const PORT = process.env.PORT ?? 3000; 

//middlewares morgan + express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.get('/', (req,res) => {
  const main = React.createElement(Home, { title: 'Express' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});


// app.get('/cards', (req,res) => {
//   const main = React.createElement(Home, { title: 'Express' });
//   const html = ReactDOMServer.renderToStaticMarkup(main);
//   res.write('<!DOCTYPE html>');
//   res.end(html);
// });








app.listen(PORT, () => {
  console.log(`Server started on ${PORT}, my Lord`)});
