import React from 'react'

const Comment = ({comment, deleteComment}) => {
    const handleDeleteComment = () => {
        deleteComment(Number(comment.id))
    }   
    return (
        
        <div id={comment.id}>
            <i onClick={handleDeleteComment} className="fas fa-times text-danger Comment-x"></i>
            {comment.commentbody}
        </div>
    )
}

export default Comment