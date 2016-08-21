import { CREATE_POST } from '../constants'

export default (posts = {}, action) => {
    const { type, payload, id } = action;

    switch (type) {
        case CREATE_POST:
            return posts.concat({...payload, id})
    }

    return posts
}
