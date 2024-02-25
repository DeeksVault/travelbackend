const express = require("express");
const mongoose = require("mongoose");

const hotelRouter = require("./routes/hotel.router");
const dataimportrouter = require("./routes/dataimport.router");
const categoryimportrouter = require("./routes/categoryimport.router");
const categoryRouter = require("./routes/category.router")
const singlehotel = require("./routes/singlehotel.router")
const authrouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");


const connectDB = require("./config/dbconfig");

const app = express();
const port = 3500;



app.use(express.json());
connectDB();

app.get("/" , (req , res)=>{
    res.send("hi");
})

app.use("/api/hotels" , hotelRouter);
app.use("/api/hoteldata" , dataimportrouter);
app.use("/api/categorydata" , categoryimportrouter);
app.use("/api/categories" , categoryRouter);
app.use("/api/hotel" , singlehotel)
app.use("/api/auth" , authrouter);
app.use("/api/wishlist" , wishlistRouter)


mongoose.connection.once("open" , ()=>{
    console.log("connected to db");
    app.listen(process.env.PORT || port , ()=>{
        console.log("server up and running");
    })
})

