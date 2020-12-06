import React from 'react'
import {NavLink} from 'react-router-dom'

const BlogList = (posts) => {
    const postList = posts.posts.postState
    let list;

    if (postList.length > 0){
        list = postList.map(p => (
            <div className='card' key={p.id} id={p.id}>
                <div className='card-body'>
                    <NavLink to={`/${p.id}`} ><h5 className='card-title'>{p.title}</h5></NavLink>
                    <p className="card-text">{p.description}</p>
                </div>
            </div>
        ))
    } else {
        list = <div>No Posts Here...</div>
    }
    return(
        <div>
            {list}
        </div>
    )
} 

export default BlogList