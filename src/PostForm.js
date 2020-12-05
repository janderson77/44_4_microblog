import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const PostForm = () => {
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
        setFormData(INITIAL_STATE)
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
                    />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input 
                            name="description"
                            className="form-control"
                            value={formData.description}
                            onChange={handleChange}
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
                        />
                    </div>

                    <button className="btn btn-info" type="submit">Submit</button>
                    <NavLink className="btn btn-danger" to="/">Cancel</NavLink>
            </form>
        </div>
    )
}

export default PostForm