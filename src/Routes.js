import React, {useState} from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Blog from './Blog'
import PostForm from './PostForm'

const Routes = () => {
    const [postState, setPostState] = useState([])
    const newPost = (data) => {
        setPostState(postState => [...postState, data])
    }

    return (
        <Switch>
            <Route postState={postState} path="/" exact >
                <Blog />
            </Route>
            <Route  path="/new" exact >
                <PostForm newPost={newPost} />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes