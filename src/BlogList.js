import React from 'react'
import {useSelector} from 'react-redux'
import BlogListCard from './BlogListCard'

const BlogList = () => {
    let list;
    const postList = useSelector(store => store.posts)

    const postArray = Object.values(postList)
    

    if (Object.keys(postList).length > 0){
        
        list = postArray.map(p => (
            <BlogListCard key={p.id} id={p.id} title={p.title} description={p.description} />
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