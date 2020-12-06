import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import "./BlogPost.css"

const BlogPost = ({posts, deletePost}) => {
    const {id} = useParams();
    const postId = id-1
    const post = posts[postId] 
    const history = useHistory()

    const handleDelete = () => {
        deletePost(post.id)
        history.push('/')
    }

    return(
        <div className='card'>
            <div className="card-body">
                <div className="title-area">
                    <h2 className="card-title">{post.title}</h2>
                    <div className="btn-group">
                        <i id="edit" className="far fa-edit text-primary btn-group-btn" ></i>
                        <i onClick={handleDelete} id="delete" className="fas fa-times text-danger btn-group-btn" ></i>
                    </div>
                </div>
                <h6 className="card.subtitle mb-2 text-muted">{post.description}</h6>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    )
}

export default BlogPost