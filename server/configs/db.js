const mongoose=require("mongoose");
require('dotenv').config();

const connectDB=()=>{
    return mongoose.connect(`mongodb+srv://priyaranjan:priyaranjan@cluster0.iivf6qk.mongodb.net/BlogApp?`,{useNewUrlParser:true});
  };
module.exports=connectDB;