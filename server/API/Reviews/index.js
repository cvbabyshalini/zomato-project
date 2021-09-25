// Libraries
import express from "express";
import passport from "passport";

// Database models
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /
Des       Get all reviews
Params    none
Body      resid
Access    Public
Method    GET 
*/
Router.get("/:resid", async (req, res) => {
    try {
        const reviews = await ReviewModel.find({ restaurant: req.params.resid});
        return res.json({ reviews });
    } catch (error){
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /new
Des       Add new food review/rating
Params    none
Body      review object
Access    Public
Method    POST 
*/
Router.post("/new", async (req,res) => {
    try{
        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({ review: "Successfully created review" });
    } catch (error){
        return res.status(500).json({ error: error.message });
    }
});

/*
Route     /delete
Des       Delete review
Params    _id
Body      none
Access    Public
Method    POST 
*/
Router.delete("/delete/:_id", async (req, res) => {
    try{
        const { _id } = req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({ review: "Successfully deleted the review" });
    }catch (error){
        return res.status(500).json({ error: error.message });
    }
});
export default Router;