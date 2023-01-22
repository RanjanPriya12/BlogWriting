import * as types from "./action.types";
import axios from "axios";

// create blog
export const createBlog=(blog)=>(dispatch)=>{
     dispatch({type:types.CREATE_BLOG_REQUEST});
     return axios.post(`http://localhost:8080/myBlogApp/blog/api/createBlog`,blog)
     .then((response)=>{
        console.log(response)
        return dispatch({type:types.CREATE_BLOG_SUCCESS});
     }).catch((error)=>{
        console.log(error)
        return dispatch({type:types.CREATE_BLOG_ERROR});
     })

}

// Get Signle Blog Request
export const getSingleBLog=(id)=>(dispatch)=>{
    dispatch({type:types.GET_SINGLE_BLOG_REQUEST});
    return axios.get(`http://localhost:8080/myBlogApp/blog/api/singleBlog/${id}`)
    .then((response)=>{
        return dispatch({type:types.GET_SINGLE_BLOG_SUCCESS,payload:response.data.blog});
    }).catch((error)=>{
        return dispatch({type:types.GET_SINGLE_BLOG_ERROR,payload:error});
    })
}

// Get All Blog Request
export const getAllBLogs=()=>(dispatch)=>{
    dispatch({type:types.GET_ALL_BLOG_REQUEST});
    return axios.get(`http://localhost:8080/myBlogApp/blog/api/allBlogs`)
    .then((response)=>{
        return dispatch({type:types.GET_ALL_BLOG_SUCCESS,payload:response.data.blogs});
    }).catch((error)=>{
        return dispatch({type:types.GET_ALL_BLOG_ERROR,payload:error});
    })
}
