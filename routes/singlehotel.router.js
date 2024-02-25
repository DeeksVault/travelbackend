const express = require("express");
const Hotel = require("../model/hotel.model");
const router = express.Router();



router.route("/:id").get(async (req , res)=>{
    try{
        const {id} = req.params;
        const hotel = await Hotel.findById(id);
        res.json(hotel);
    }
    catch(error){
        console.log(err);
        res.status(404).json({message:"did not find any hotel"});
    }
})

module.exports = router;