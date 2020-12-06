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

      const newPost = (data) => {
          setPostState(postState => [...postState, data])
          setCount(() => count + 1)
      }
    
      const deletePost = (pid) => {
          const newPostState = postState.filter((post) => post.id !== pid)
          setPostState(newPostState)
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
                <BlogPost posts={postState} deletePost={deletePost} />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes