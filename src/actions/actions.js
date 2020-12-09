import {ADD_POST, EDIT_POST, DELETE_POST, ADD_COMMENT, DELETE_COMMENT, FETCH_POSTS, FETCH_SINGLE_POST, ERROR, CLEAN_POST, GET_COMMENTS} from './actionTypes'

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

export const fetch_single_post = (data) => ({
    type: FETCH_SINGLE_POST,
    data
})

export const clean_post = (data) => ({
    type: CLEAN_POST,
    data
})

export const get_comments = (comments) => ({
    type: GET_COMMENTS,
    comments
})

export const add_comment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

export const delete_comment = (commentId) => ({
    type: DELETE_COMMENT,
    commentId
})

export const error = (err) => ({
    type: ERROR, 
    err
})