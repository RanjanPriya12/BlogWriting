const Blog=require('../models/blg.model');

const createBlog= async(req,res)=>{
    const blog= await Blog.create(req.body);
    return res.status(201).json({success:true,message:"Your Blog Created Successfully",blog:blog});
}

const getSingleBlog=async(req,res)=>{
    const blog = await Blog.findById(req.params.id).lean().exec();
    if(!blog){
        throw new Error(`Blog does not exists with Id:${req.params.id}`);
    }
    res.status(200).json({ success: true, blog:blog });
}

const getAllBLogs=async(req,res)=>{
    const blogs = await Blog.find({}).lean().exec();
    res.status(200).json({ success: true, blogs:blogs });
}

module.exports={createBlog,getSingleBlog,getAllBLogs};