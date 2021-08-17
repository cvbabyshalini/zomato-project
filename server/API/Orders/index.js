// Libraries
import express from "express";
import passport from "passport";

// Database models
import { MenuModel, ImageModel, OrderModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /r
Des       Get all orders based on id
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try{
        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({ user: _id});

        if(!getOrders){
            return res.status(404).json({ error: "User not found "});
        }
        return res.status(200).json({ orders: getOrders });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
export default Router;