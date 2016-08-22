import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import randomId from '../middlewares/randomId'
import createPost from '../middlewares/createPost'
import jwtDecode from 'jwt-decode'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { setCurrentUser } from '../AC/authActions';
import { loadPosts } from '../AC/posts';
import axios from 'axios';

const enhancer = compose(
    applyMiddleware(thunk, randomId, createPost, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const defaultState = {
    posts: []
};

const store = createStore(reducer, defaultState, enhancer);

axios.get('/api/posts').then(
    res => {
        console.log(res.data.posts);
        store.dispatch(loadPosts(res.data.posts))
    },
    rej => {
        console.log(rej);
    }
);

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

window.store = store;

export default store