import React, { Component } from 'react';
import { createPost } from '../AC/createPost'
import { connect } from 'react-redux'

class CreatePost extends Component {
    state = {
        title: '',
        description: ''
    };

    render() {
        return (
            <div>
                <h3>
                    Create post
                </h3>
                <div>
                    <form onSubmit = { this.handleSubmit } >
                        <input value = { this.state.title }
                               onChange = { this.handleChange('title') }
                               type="text"/>
                        <textarea
                            placeholder="Insert here a post content"
                            onChange = { this.handleChange('description') }
                            value = { this.state.description } />
                        <input type="submit" value="Post"/>
                    </form>
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

        const { createPost } = this.props;

        createPost({
            title: this.state.title,
            description: this.state.description
        });

        this.setState({
            title: '',
            description: ''
        })
    }
}

export default connect(null, { createPost })(CreatePost)