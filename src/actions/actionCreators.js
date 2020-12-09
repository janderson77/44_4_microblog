import axios from 'axios'
import { fetch_posts, error, delete_post, edit_post, fetch_single_post, delete_comment, clean_post, get_comments, add_comment, add_post } from './actions';

const API_URL = "http://localhost:5000/api"

const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

export const fetchPosts = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${API_URL}/posts`)
            const data = toObject(res.data,'id')
            dispatch(fetch_posts(data))
        }catch(e){
            dispatch(error(e))
        }
    }
}

export const fetchSinglePost = (postId) => {
    return async function (dispatch) {
        try{
            const res = await axios.get(`${API_URL}/posts/${postId}`)
            if(res.status !== 200){
                throw new Error()
            }else{
                dispatch(fetch_single_post(res.data))
            }
            
            
        }catch(e){
            dispatch(error(e))
        }
    }
}

export const cleanPost = () => {
    return (dispatch) => {
        dispatch(clean_post({}))
    }
}

export const addPost = (post) => {
    return async function (dispatch) {
        try{
            const res = await axios.post(`${API_URL}/posts`, post)
            if(res.status !== 201){
                throw new Error()
            }else{
                dispatch(add_post(res.data))
            }
        }catch(e){
            dispatch(error(e))
        }
    }
}

export const editPost = (post) => {
    return async function (dispatch) {
        try {
            const res = await axios.put(`${API_URL}/posts/${post.id}`, post)
            if(res.status !== 200){
                throw new Error()
            }else{
                dispatch(edit_post(post))
            }
        }catch(e){
            dispatch(error(e))
        }
    }
}

export const deletePost = (postId) => {
    return async function (dispatch) {
        try {
            const res = await axios.delete(`${API_URL}/posts/${postId}`)
            if(res.status !== 200){
                throw new Error()
            }else{
                dispatch(delete_post(postId))
            }
        }catch(e){
            dispatch(error(e))
        }
    }
}

export const getComments = (postId) => {
    return async function (dispatch) {
        try{
            const res = await axios.get(`${API_URL}/posts/${postId}/comments`)
            if(res.status !== 200){
                throw new Error()
            }else{
                dispatch(get_comments(res.data))
            }
        }catch(e){
            dispatch(error(e))
        }
    }
}

export const addComment = (postId, commentBody) => {
    return async function (dispatch) {
        try{
            const res = await axios.post(`${API_URL}/posts/${postId}/comments`, commentBody)

            if(res.status !== 200) {
                throw new Error()
            }else{
                dispatch(add_comment(res.data))
            }
        }catch(e){
            dispatch(error(e))
        }
    }
}

export const deleteComment = (postId, commentId) => {
    return async function (dispatch) {
        try{
            const res = await axios.delete(`${API_URL}/posts/${postId}/comments/${commentId}`)

            if(res.status !== 200){
                throw new Error()
            }else{
                dispatch(delete_comment(Number(commentId)))
            }
        }catch(e){
            dispatch(error(e))
        }
    }
}