import React, {useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import EditPostForm from './EditPostForm'
import CommentSection from './CommentsSection'
import "./BlogPost.css"

const BlogPost = ({posts, deletePost, editPost}) => {
    const {id} = useParams();
    const postId = Number(id)
    const post = posts.find(p =>{ return p.id === postId})
    const history = useHistory()

    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        setIsEditing(!isEditing)
    }

    const handleDelete = () => {
        deletePost(post.id)
        history.push('/')
    }

    return(
        <div>
            {isEditing ? <EditPostForm post={post} editPost={editPost} setIsEditing={setIsEditing} />: null}
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
            <CommentSection />
        </div>
    )
}

export default BlogPost