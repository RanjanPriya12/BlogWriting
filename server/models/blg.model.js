const mongoose=require('mongoose');

const blogSchema= new mongoose.Schema({
    title:{type:String,required:true},
    content:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true,
});

const Blog= new mongoose.model('blog',blogSchema);
module.exports=Blog;