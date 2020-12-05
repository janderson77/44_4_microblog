import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Blog from './Blog'
import NewPost from './NewPost'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact >
                <Blog />
            </Route>
            <Route path="/posts/new" exact >
                <NewPost />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes