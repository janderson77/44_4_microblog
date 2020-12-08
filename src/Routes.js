import React, {useState} from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Blog from './Blog'
import PostForm from './PostForm'
import BlogPost from './BlogPost'

const Routes = () => {
      
//!!!!!!!!!!!!!!!!!Comments Functions!!!!!!!!!!!!!!!!!!
        const [commentsState, setCommentsState] = useState([])
        const [commentCount, setCommentCount] = useState(1)

        const newComment = (comment) => {
            setCommentsState([...commentsState, comment]) 
            setCommentCount(() => commentCount + 1)
        }

        const deleteComment = (cid) => {
            const newCommentState = commentsState.filter((comment) => comment.id !== cid)
            setCommentsState(newCommentState)
        }

    return (
        <Switch>
            <Route path="/" exact >
                <Blog />
            </Route>
            <Route  path="/new" exact >
                <PostForm />
            </Route>
            <Route path="/:id" exact>
                <BlogPost comments={commentsState} newComment={newComment} commentId={commentCount} deleteComment={deleteComment} />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes