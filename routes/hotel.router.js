const express = require("express");
const router = express.Router();
const hotels = require("../data/hotels");
const Hotel = require("../model/hotel.model");



router.route("/").get(async (req , res)=>{
    const hotelcategory = req.query.category;
    try{
        let hotels
        if(hotelcategory){
            hotels = await Hotel.find({category:hotelcategory})
        }
        else{
            hotels = await Hotel.find({});
        }
        hotels?res.send(hotels):res.status(404).json({message:"hotels not found"});
    }   
    catch(err){
        res.json({message:"error occured while searching for hotel"});
    } 
})

module.exports = router;
