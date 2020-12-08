import React, {useState} from 'react'
import {useParams, useHistory, NavLink} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import EditPostForm from './EditPostForm'
import CommentSection from './CommentsSection'
import "./BlogPost.css"
import {delete_post} from './actions/actions'

const BlogPost = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {id} = useParams();
    const postId = Number(id)
    const getPost = useSelector(store => ({
        post: store.posts[postId]
    }))
    const post = getPost.post

    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        setIsEditing(!isEditing)
    }

    const handleDelete = () => {
        dispatch(delete_post(post.id))
        history.push('/')
    }
    if(post === undefined){
        return(
            <div>
                <h2>404! Not Found!</h2>
                <NavLink to="/">Go Back Home!</NavLink>
            </div>
        )
    }else {

    return(
        <div>
            {isEditing ? <EditPostForm postId={postId} setIsEditing={setIsEditing} />: null}
            <div className='card'>
                <div className="card-body">
                    <div className="title-area">
                        <h2 className="card-title">{post.title}</h2>
                        <div className="btn-group">
                            <i onClick={handleEditClick} id="edit" className="far fa-edit text-primary btn-group-btn" ></i>
                            <i onClick={handleDelete} id="delete" className="fas fa-times text-danger btn-group-btn" ></i>
                        </div>
                    </div>
                    <h6 className="card.subtitle mb-2 text-muted">{post.description}</h6>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>
            <CommentSection postId={post.id} />
        </div>
    )
    }
}

export default BlogPost