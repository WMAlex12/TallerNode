const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const name = 'KarelVazquez WM'; 
    res.send(`Hello World! My name is ${name}.`);
});

app.get('/myname', (req, res) => {
    const name = 'KarelVazquez WM'; 
    res.send(`Hello World! My name is ${name}.`);
  });
  

app.listen(3000, () =>{
    console.info(`Database is running on port ${port}`);
});

