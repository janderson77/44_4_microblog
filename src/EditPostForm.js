import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editPost} from './actions/actionCreators'

const EditPostForm = ({postId, setIsEditing}) => {
    const dispatch = useDispatch()

    const {posts} = useSelector(state => ({
        posts: state.posts
    }))

    const post = posts[postId]

    const INITIAL_STATE = {
        title: post.title,
        description: post.description,
        body: post.body
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     editPost(post.id, formData.title, formData.description, formData.body)
    //     setIsEditing(false)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editPost({...formData, id: post.id}))
        // dispatch(edit_post({...formData, id: post.id}))
        setIsEditing(false)
    }

    const handleCancel = (e) => {
        e.preventDefault()
        setIsEditing(false)
    }

    return (
        <div className='container PostForm'>
            <form className="PostForm-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        name="title"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input 
                            name="description"
                            className="form-control"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <textarea 
                            name="body"
                            type="textarea"
                            className="form-control"
                            value={formData.body}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button className="btn btn-info" type="submit">Submit</button>
                    <button onClick={handleCancel} className="btn btn-danger" to="/">Cancel</button>
            </form>
        </div>
    )
}

export default EditPostForm