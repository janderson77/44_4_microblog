import {ADD_POST, EDIT_POST, DELETE_POST, UP} from './actionTypes'

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

export const up = () => ({
    type: UP
})