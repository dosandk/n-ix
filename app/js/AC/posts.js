import { CREATE_POST, LOAD_POSTS } from '../constants'

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: {...post},
        withRandomId: true
    }
}

export function loadPosts(posts) {
    return {
        type: LOAD_POSTS,
        payload: [...posts],
    }
}