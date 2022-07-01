require('@babel/register');


const express = require ('express');
const logger = require('morgan');
const path = require('path');


const app = express();
const PORT = process.env.PORT ?? 3000; 


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req,res) => {
  res.send('мама я попал на тиви')
})


app.listen(PORT, () => {
  console.log(`Server started on ${PORT}, my Lord`)});
