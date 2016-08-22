import React, { Component } from 'react'
import Header from './Header'
import CreatePost from './CreatePost'
import Post from '../components/Post'
import { connect } from 'react-redux'

class PostsList extends Component {
    render() {
        const { posts, auth } = this.props;

        const postsItems = posts.map((post) => {
            return <Post key={ post.id } post={ post } />
        });

        const createPost = () => {
            return auth.isAuthenticated ? <CreatePost /> : '';
        };

        return (
            <div>
                <Header />
                { createPost() }
                <div>
                    { postsItems }
                </div>
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        posts: state.posts,
        auth: state.auth
    }
})(PostsList)