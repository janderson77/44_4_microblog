import React, {useState, useEffect} from 'react'
import Comment from './Comment'
import './CommentSection.css'
import {useSelector, useDispatch} from 'react-redux'
import {deleteComment, getComments, addComment} from './actions/actionCreators'

const CommentSection = ({postId}) => {
    const INITIAL_STATE = {
        commentBody: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch()

    useEffect(() => {
        const getPostComments = async (postId) => {
            dispatch(getComments(Number(postId)))
        }
        getPostComments(postId)
        
    }, [dispatch, postId])

    const {comments} = useSelector(store => ({
        comments: store.comments
    }))

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const deleteComments = (id) => {
        dispatch(deleteComment(postId, id))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addComment(Number(postId),{...formData}))
        setFormData(INITIAL_STATE)
    }

    let commentList

    if(comments.length < 1){
        commentList = <p>Loading comments...</p>
    }else{
        commentList = comments.map(c => (
            <Comment key={c.id} comment={c} deleteComment={deleteComments} />
        ))
    }
    

    return(
        <div className="Comments">
            Comments
            <div className="Comments-commentSection">
                {commentList.length > 0 ? <div>{commentList}</div> : <div>Sorry, no comments yet...</div>}
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