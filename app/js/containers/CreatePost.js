import React, { Component } from 'react';
import { createPost } from '../AC/posts'
import { connect } from 'react-redux'

class CreatePost extends Component {
    state = {
        title: '',
        description: ''
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h3>Create post</h3>
                    <div>
                        <form onSubmit = { this.handleSubmit } >
                            <div className="form-group">
                                <input className="form-control"
                                       placeholder="Post title"
                                       value = { this.state.title }
                                       onChange = { this.handleChange('title') }
                                       type="text"/>
                            </div>
                            <div className="form-group">
                               <textarea className="form-control"
                                         placeholder="Insert here a post content"
                                         onChange = { this.handleChange('description') }
                                         value = { this.state.description } />
                            </div>
                            <input className="btn btn-default" type="submit" value="Create post"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    handleChange = input => ev => {
        this.setState({
            [input]: ev.target.value
        })
    };

    handleSubmit = (ev) => {
        ev.preventDefault();

        const { createPost, user } = this.props;

        createPost({
            user: user.username,
            title: this.state.title,
            description: this.state.description
        });

        this.setState({
            title: '',
            description: ''
        })
    }
}

export default connect((state) => state.auth, { createPost })(CreatePost)