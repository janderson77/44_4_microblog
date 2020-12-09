import axios from 'axios'
import { fetch_posts } from './actions';

const API_URL = "http://localhost:5000/api"

const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

export const fetchPosts = () => {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${API_URL}/posts`)
            const data = toObject(res.data,'id')
            dispatch(fetch_posts(data))
        }catch(e){
            dispatch(gotError(e))
        }
    }
}

export const gotError = () => {
    return {
        type: "ERROR"
    }
}