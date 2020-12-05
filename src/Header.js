import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return(
        <div className="container=lg">
            <h1 className="display-3">Microblog</h1>
            <p>Get in the Rithm of blogging!</p>
            <div>
                <NavLink to="/">Blog</NavLink>
                <NavLink to="/new">Add a new post</NavLink>
            </div>
        </div>
        

    )
}

export default Header