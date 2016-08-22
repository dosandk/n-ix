import React, { Component } from 'react'
import Header from './Header'
import CreatePost from './CreatePost'
import Post from '../components/Post'
import { connect } from 'react-redux'

class PostsList extends Component {
    render() {
        const { posts, auth } = this.props;

        const postsItems = posts.reverse().map((post) => {
            return <Post key={ post.id } post={ post } />
        });

        const createPost = () => {
            return auth.user.isAuthenticated ? <CreatePost /> : '';
        };

        return (
            <div>
                <div className="container">
                    <Header />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel">
                                <div className="panel-body">
                                    { createPost() }
                                    { postsItems }
                                </div>
                            </div>
                        </div>
                    </div>
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