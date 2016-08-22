import { CREATE_POST, LOAD_POSTS } from '../constants'

export default (posts = {}, action) => {
    const { type, payload, id } = action;

    switch (type) {
        case CREATE_POST:
            return posts.concat({...payload, id})
        case LOAD_POSTS:
            return posts.concat([...payload])
    }

    return posts
}
