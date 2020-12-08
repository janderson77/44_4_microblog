import React from 'react'
import {NavLink} from 'react-router-dom'

const BlogListCard = ({id, title, description}) => {
    return (
        <div className='card' key={id} id={id}>
            <div className='card-body'>
                <NavLink to={`/${id}`} ><h5 className='card-title'>{title}</h5></NavLink>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default BlogListCard