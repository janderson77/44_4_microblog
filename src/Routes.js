import React, {useState} from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Blog from './Blog'
import PostForm from './PostForm'
import BlogPost from './BlogPost'

const Routes = () => {
    const POST_INITIAL_STATE = {
        id: 1,
        title: "1st Post",
        description: "The first post",
        body: "This is the body"
      }
      const [postState, setPostState] = useState([POST_INITIAL_STATE])
      
      const [count, setCount] = useState(2)

//!!!!!!!!!Posts Functions!!!!!!!!!!!!
      const newPost = (data) => {
          setPostState(postState => [...postState, data])
          setCount(() => count + 1)
      }

      const editPost = (id, title, description, body) => {
          const posts = [...postState]
          const post = posts.find(p => {return p.id === Number(id)})
          const postIndex = posts.indexOf({id: Number(id)})

          post.title = title
          post.description = description
          post.body = body

          posts[postIndex] = post

          setPostState(posts)

      }
    
      const deletePost = (pid) => {
          const newPostState = postState.filter((post) => post.id !== pid)
          setPostState(newPostState)
      }
      
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
                <Blog postState={postState} />
            </Route>
            <Route  path="/new" exact >
                <PostForm newPost={newPost} count={count} />
            </Route>
            <Route path="/:id" exact>
                <BlogPost posts={postState} deletePost={deletePost} editPost={editPost} comments={commentsState} newComment={newComment} commentId={commentCount} deleteComment={deleteComment} />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes