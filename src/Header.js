import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return(
        <div className="jumbotron">
            <h1 className="display-3">Microblog</h1>
            <p className="lead">Get in the Rithm of blogging!</p>
            <div>
                <NavLink className="Header-nav" to="/">Blog</NavLink>
                <NavLink className="Header-nav" to="/posts/new">Add a new post</NavLink>
            </div>
        </div>
        

    )
}

export default Header