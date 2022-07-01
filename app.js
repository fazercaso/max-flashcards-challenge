const express = require ('express');

const app = express();
const PORT = process.env.PORT ?? 3000; 

app.get('/', (req,res) => {
  res.send('мама я попал на тиви')
})


app.listen(PORT, () => {
  console.log(`Server started on ${PORT}, my Lord`)});
