import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Blog from './Blog'
import PostForm from './PostForm'
import BlogPost from './BlogPost'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact >
                <Blog />
            </Route>
            <Route  path="/new" exact >
                <PostForm />
            </Route>
            <Route path="/:id" exact>
                <BlogPost />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes