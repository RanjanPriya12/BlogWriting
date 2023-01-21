const express=require('express');
const { createBlog, getSingleBlog, getAllBLogs } = require('../controllers/blog.controller');

const router=express.Router();

router.route('/createBlog').post(createBlog);
router.route('/singleBlog/:id').get(getSingleBlog);
router.route('/allBlogs').get(getAllBLogs);

module.exports=router;