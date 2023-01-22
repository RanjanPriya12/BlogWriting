const express=require('express');
const cors=require('cors');
const connectDB = require('./configs/db');
require('dotenv').config();
const path = require("path");
const cloudinary = require("cloudinary");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const blogRoute=require('./routes/blog.route');

const app=express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.get("/",(req,res)=>{
    return res.send(`<h2>Welcome to our Blog-Writing App</h2>`);
});

app.use('/myBlogApp/blog/api',blogRoute);

// cloud file upload
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
  

const port=process.env.PORT;
app.listen(port,async()=>{
    try {
       await connectDB();
    } catch (error) {
        console.log("error",error);
    }
    console.log(`App is listening at port http://localhost:${port}`);
});