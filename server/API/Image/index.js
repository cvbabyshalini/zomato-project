// Libraries
import express from "express";
import passport from "passport";
import AWS from "aws-sdk";
import multer from "multer";

// Database models
import { ImageModel } from "../../database/allModels";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });


/*
Route     /
Des       Get image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
        const image = await ImageModel.findById(req.params._id);

        return res.json({image});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


/*
Route     /
Des       Uploads given image to S3 bucket, and saves file link to mongodb
Params    none
Access    Public
Method    GET  
*/
Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        // s3 bucket options
        const bucketOptions = {
            Bucket: "zomato-shalini",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read", // Access Control List
        };

        const uploadImage = await s3Upload(bucketOptions);

        await ImageModel.create({images : [{ location : uploadImage.Location}]})

        return res.status(200).json({ uploadImage });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
// @Route   GET /images/:imageID
// @des     get all images associated with the given ID
// @access  PUBLIC
Router.get("/:imageID", async (req, res) => {
    try {
      const { imageID } = req.params;
      const getImages = await ImageModel.findById(imageID);
      if (!getImages)
        return res.status(404).json({ foods: "Images Not Found!!!" });
  
      return res.json({ images: getImages });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   POST /images/new
  // @des     add new images
  // @access  PRIVATE
  Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const newImages = await ImageModel.create(req.body.imageData);
      return res.json({ images: newImages });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  // @Route   DELETE /images/delete/single
  // @des     delete one image
  // @access  PRIVATE
  Router.delete(
    "/delete/single",
    passport.authenticate("jwt"),
    async (req, res) => {
      try {
        const deleteOneImage = await ImageModel.findByIdAndUpdate(
          req.body.imageData.parentID,
          {
            $pull: { images: { _id: req.body.imageData.imageID } },
          },
          { new: true }
        );
        console.log(deleteOneImage);
        return res.json({ images: Boolean(deleteOneImage) });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }
  );
  
  // @Route   DELETE /images/delete
  // @des     delete all image
  // @access  PRIVATE
  Router.delete("/delete/", passport.authenticate("jwt"), async (req, res) => {
    try {
      const deleteImage = await ImageModel.findByIdAndDelete(
        req.body.imageData.parentID
      );
      return res.json({ images: Boolean(deleteImage) });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  export default Router;
