import React, { Component } from 'react'
import Header from './Header'
import CreatePost from './CreatePost'
import Post from '../components/Post'
import { connect } from 'react-redux'

class PostsList extends Component {
    render() {
        const { posts } = this.props;

        const postsItems = posts.map((post) => {
            return <Post key={ post.id } post={ post } />
        });

        return (
            <div>
                <Header />
                <CreatePost />
                <div>
                    { postsItems }
                </div>
            </div>
        )
    }
}

export default connect((state, props) => {
    return {
        posts: state.posts
    }
})(PostsList)