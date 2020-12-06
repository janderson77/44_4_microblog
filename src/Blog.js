import React from 'react'
import BlogList from './BlogList'

const Blog = (postState) => {
    return(
        <div className="container-fluid">
            <h2 className="display-4">Blog</h2>
            <BlogList posts={postState} />
        </div>
    )
}

export default Blog