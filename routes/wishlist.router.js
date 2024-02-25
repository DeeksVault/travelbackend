const express = require("express");
const verifyuser = require("../middleware/verifyuser");
const Wishlist = require("../model/wishlist.model");

const router = express.Router();


router.route("/").post(verifyuser , async (req , res)=>{
    const newwishlist = new Wishlist(req.body);
    try{
        const savedwishlist = await newwishlist.save();
        res.status(201).json(savedwishlist);
    }
    catch(err){
        res.status(500).json({message:"failed to create wishlist"});
    }
})

router.route("/:id").delete(verifyuser , async (req , res)=>{
    const hotelid = req.params.id;
    try{
        await Wishlist.findByIdAndDelete(hotelid);
        console.log(hotelid);
        res.json({message:"hotel deleted from wishlist"});
    }
    catch(err){
        res.status(500).json({message : "failed to delete from wishlist"});
    }
})

router.route("/").get(verifyuser , async (req , res)=>{
    try{
        const wishlist = await Wishlist.find({});
        console.log(wishlist);
        wishlist?res.json(wishlist):res.json({message : " No items found in wishlist"});
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;