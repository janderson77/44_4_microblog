import React from 'react'
import {NavLink} from 'react-router-dom'

const notFound = () => {
    return(
        <div>
            <h1>404: Not Found</h1>
            <NavLink to="/">Go Back.</NavLink>
        </div>
    )
}

export default notFound