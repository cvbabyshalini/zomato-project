// Libraries
import express from "express";
import passport from "passport";

// Database models
import { FoodModel} from "../../database/allModels";

const Router = express.Router();

/*
Route     /r
Des       Get all food based on particular restaurant
Params    id
Access    Public
Method    GET  
*/
Router.get("/r/:_id", async (req, res) => {
    try{
        const {_id} = rq.params;
        const foods = await FoodModel.find({restaurant: _id});

        return res.json({ foods });
    } catch (error){
        return res.status(500).json({ error: error.message })
    }
});

/*
Route     /r
Des       Get all food based on particular category
Params    category
Access    Public
Method    GET  
*/
Router.get("/r/:category", async (req, res) => {
    try{
        const { category } = rq.params;
        const foods = await FoodModel.find({ $regex: category, $options: "i"});

        return res.json({ foods });
    } catch (error){
        return res.status(500).json({ error: error.message })
    }
});

export default Router;