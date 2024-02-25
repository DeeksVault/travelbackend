const express = require("express");
const Category = require("../model/category.model");
const categories = require("../data/categories");



const router = express.Router();

router.route("/").post(async (req, res)=>{
    try{
        await Category.deleteMany();
        const categoriesinDB = await Category.insertMany(categories.data);
        res.json(categoriesinDB);
    }
    catch(err){
        console.log(err);
        res.json({message:"could not add in DB"})
    }
})

module.exports = router;