import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface BlogProps {

    "title":string,
    "content": string,
    "author": {
        "name": string
    },
    "id" : number
}

export const useBlogs = () => {

    const [loading , setLoading] = useState(true);
    const [blogs , setBlogs] = useState<BlogProps[]>([]);

    useEffect( () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error("Token is missing.");
            setLoading(false);
            return;
        }
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk` , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            setBlogs(response.data.blogs);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error while fetching: ' , error);
            setLoading(false);
        })
    } , [])

    return({
        loading,
        blogs
    })
}

export const useBlog = ({id} : {id : string}) => {
    const [loading , setLoading] = useState(true);
    const [blog , setBlog] = useState<BlogProps>();

    useEffect( () => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}` , {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        }).then (response => {
            setBlog(response.data.blog)
            setLoading(false)
        })

    },[id])

    return(
        {blog,
        loading}
    )
}