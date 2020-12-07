import React from 'react'

const Comment = ({comment, deleteComment}) => {
    const handleDeleteComment = () => {
        deleteComment(comment.id)
    }   
    return (
        
        <div id={comment.id}>
            <i onClick={handleDeleteComment} className="fas fa-times text-danger Comment-x"></i>
            {comment.commentBody}
        </div>
    )
}

export default Comment