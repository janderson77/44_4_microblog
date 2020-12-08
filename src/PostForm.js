import React, {useState} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {add_post, up} from './actions/actions'

const PostForm = () => {
    const dispatch = useDispatch()
    const newPost = (post) => dispatch(add_post(post))
    const count = useSelector(store => ({
        count: store.count
    }))

    const history = useHistory()
    const INITIAL_STATE = {
        title: "",
        description: "",
        body: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        newPost({...formData, id: count.count})
        setFormData(INITIAL_STATE)
        dispatch(up())
        history.push('/')

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
                <NavLink className="btn btn-danger" to="/">Cancel</NavLink>
            </form>
        </div>
    )
}

export default PostForm