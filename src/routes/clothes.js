"use strict";
const express = require("express");

const {food} = require("../models/index");


const foodRouter = express.Router();

//add routes
foodRouter.get("/food", getFood);
foodRouter.get("/food/:id", getOneFood);
foodRouter.post("/food", createFood);
foodRouter.put("/food/:id", updateFood);
foodRouter.delete("/food/:id", deleteFood);
// to add functionality we need to add
async function getFood (req, res) {

    const allFood = await food.findAll();
    res.status(200).json(allFood);
}
//if we want to find one

async function getOneFood(req, res) {
    
    const foodId = parseInt(req.params.id);

    let food = await food.findOne({ where: { id: foodId } });
    res.status(200).json(food);
}

async function createFood(req, res) {
    
    let newfood = req.body;
    let food = await People.create(newfood);
    res.status(201).json(food);
}

async function updateFood(req, res) {
   
    let foodId = parseInt(req.params.id);
    let updateFood = req.body; 
    
    let foundFood = await People.findOne({ where: { id: foodId } });
    if (foundFood) {

        let updatedFood = await foundFood.update(updateFood);
        res.status(201).json(updatedFood);
    } else {

        res.status(404);
    }
}
async function deleteFood(req, res) {
  
    let foodId = parseInt(req.params.id);
    let deleteFood = await People.destroy({ where: { id: foodId } });

   

    res.status(204).json(deleteFood); 
}
module.exports = foodRouter;