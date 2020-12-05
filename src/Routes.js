import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Blog from './Blog'
import PostForm from './PostForm'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact >
                <Blog />
            </Route>
            <Route path="/new" exact >
                <PostForm />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes