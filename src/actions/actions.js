import {ADD_POST, EDIT_POST, DELETE_POST, UP, ADD_COMMENT, DELETE_COMMENT, FETCH_POSTS, ERROR} from './actionTypes'

export const add_post = (post) => ({
    type: ADD_POST,
    post
}) 

export const edit_post = (post) => ({
    type: EDIT_POST,
    post
})

export const delete_post = (id) => ({
    type: DELETE_POST,
    id
})

export const fetch_posts = (posts) => ({
    type: FETCH_POSTS,
    posts
})

export const add_comment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

export const delete_comment = (id) => ({
    type: DELETE_COMMENT,
    id
})

export const up = () => ({
    type: UP
})

export const error = (err) => ({
    type: ERROR, 
    err
})