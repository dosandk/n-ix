import axios from 'axios';

export default store => next => action => {
    if (action.id) {
        axios.post('/api/posts', { id: action.id, ...action.payload });
    }

    return next(action);
}