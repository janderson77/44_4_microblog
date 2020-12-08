import axios from 'axios'

const API_URL = "http://localhost:5000/api"

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            const data = await axios.get(`${API_URL}/posts`)
        }catch(e){

        }
    }
}

export const gotPosts = (posts) => {
    return{
        type: "FETCH_POSTS",
        posts
    }
}

export const gotError = () => {
    return {
        type: "ERROR"
    }
}