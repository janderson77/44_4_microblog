import React, {useEffect} from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import BlogListCard from './BlogListCard'
import {fetchPosts} from './actions/actionCreators'

const BlogList = () => {
    const dispatch= useDispatch()
    
    useEffect(() => {
        dispatch(fetchPosts())
    },[dispatch])

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