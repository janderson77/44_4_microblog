import React, {useState} from 'react'
import Comment from './Comment'
import './CommentSection.css'

const CommentSection = ({postId, comments, newComment, commentId, deleteComment}) => {
    const INITIAL_STATE = {
        commentBody: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        newComment({...formData, postId: postId, id: commentId})
        setFormData(INITIAL_STATE)
    }

    const commentList = comments.map(c => (
        <Comment key={c.id} comment={c} deleteComment={deleteComment} />
    ))

    console.log(commentId)

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