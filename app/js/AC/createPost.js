import { CREATE_POST } from '../constants'

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: {...post},
        withRandomId: true
    }
}