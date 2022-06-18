"use strict"; 
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

const notFoundHandler = require("./ error-handlers/ 404");
const errorHandler = require("./ error-handlers/500");

const foodRouts = require("./ routes/food");
const clothesRouts= require("./ routes/clothes");



app.use(express.json());

app.use(foodRouts);
app.use(clothesRouts);

app.use("*", notFoundHandler);
app.use(errorHandler); 


function start(PORT){
    app.listen(PORT, ()=>{
        console.log(`listin and runing on PORT ${PORT}`);
    })
}

module.exports ={
    app :app,
    start: start, 
}