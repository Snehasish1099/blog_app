import { useNavigate } from "react-router";
import { doDeleteApiCall, doGetApiCall, doPostApiCall, doPutApiCall } from "../../utils/ApiConfig";
import { useState } from "react";

export const BlogHooks = () => {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState(null)

    const createBlogApiCall = async (blogData) => {
        const data = {
            url: `${import.meta.env.VITE_API_URL}/blogs`,
            bodyData: {
                title: blogData.title,
                content: blogData.content,
            },
        };

        const res = await doPostApiCall(data);
        if (res?.status === 201) {
            // getAllBlogsApiCall()
            navigate('/dashboard')
        } else {

        }
    };

    const getAllBlogsApiCall = async () => {
        const data = {
            url: `${import.meta.env.VITE_API_URL}/blogs`,
        };

        const res = await doGetApiCall(data);
        if (res?.status === 200) {
            setBlogs(res?.data)
        } else {

        }
    };

    const getBlogByIdApiCall = async (id) => {
        const data = {
            url: `${import.meta.env.VITE_API_URL}/blogs/${id}`,
        };

        const res = await doGetApiCall(data);
        if (res?.status === 200) {
            return res?.data
        } else {
            return null
        }
    };

    const updateBlogApiCall = async (id, updatedData) => {
        const data = {
            url: `${import.meta.env.VITE_API_URL}/blogs/${id}`,
            bodyData: {
                title: updatedData.title,
                content: updatedData.content,
            },
        };

        const res = await doPutApiCall(data);
        if (res?.status === 200) {
            // getAllBlogsApiCall()
            navigate('/dashboard')
        } else {
            
        }
    };

    const deleteBlogApiCall = async (id) => {
        const data = {
            url: `${import.meta.env.VITE_API_URL}/blogs/${id}`,
        };

        const res = await doDeleteApiCall(data);
        if (res?.status === 200) {
            getAllBlogsApiCall()
            console.log("# blog deleted")
        } else {

        }
    };

    return {
        createBlogApiCall,
        getAllBlogsApiCall,
        getBlogByIdApiCall,
        updateBlogApiCall,
        deleteBlogApiCall,
        blogs
    }
}