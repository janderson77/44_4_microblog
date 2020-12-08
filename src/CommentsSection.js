import React, {useState} from 'react'
import Comment from './Comment'
import './CommentSection.css'
import {useSelector, useDispatch} from 'react-redux'
import {add_comment, delete_comment} from './actions/actions'
import { v4 as uuid } from 'uuid';

const CommentSection = ({postId}) => {
    const INITIAL_STATE = {
        commentBody: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch()

    const getComments = useSelector(store => ({
        comments: store.comments
    }))
    const comments = getComments.comments

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const deleteComment = (id) => {
        dispatch(delete_comment(id))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(add_comment({...formData, postId: postId, id: uuid()}))
        setFormData(INITIAL_STATE)
    }

    const commentList = comments.map(c => (
        <Comment key={c.id} comment={c} deleteComment={deleteComment} />
    ))

    return(
        <div className="Comments">
            Comments
            <div className="Comments-commentSection">
                {comments.length > 0 ? <div>{commentList}</div> : <div>Sorry, no comments yet...</div>}
            </div>
            <div className="Comments-CommentForm ">
                <form className="d-flex flex-row" onSubmit={handleSubmit} >
                    <button type="submit" className="btn btn-info btn-sm Add-Btn">Add</button>
                    <div className="form-group col-11">
                        <input 
                            name="commentBody"
                            className="form-control"
                            value={formData.commentBody}
                            onChange={handleChange}
                            placeholder="Add Comment"
                            required
                        />
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default CommentSection