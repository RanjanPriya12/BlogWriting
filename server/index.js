const express=require('express');
const cors=require('cors');
const connectDB = require('./configs/db');
require('dotenv').config();
const blogRoute=require('./routes/blog.route');

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    return res.send(`<h2>Welcome to our Blog-Writing App</h2>`);
});

app.use('/myBlogApp/blog/api',blogRoute);

const port=process.env.PORT;
app.listen(port,async()=>{
    try {
       await connectDB();
    } catch (error) {
        console.log("error",error);
    }
    console.log(`App is listening at port http://localhost:${port}`);
});