// Libraries
import express from "express";
import passport from "passport";

// Database models
import { RestaurantModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /
Des       Get all the restaurant details based on city
Params    none
Access    Public
Method    GET  
*/