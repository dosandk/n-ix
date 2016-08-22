import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import randomId from '../middlewares/randomId'
import jwtDecode from 'jwt-decode'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { setCurrentUser } from '../AC/authActions';

const enhancer = compose(
    applyMiddleware(thunk, randomId, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const defaultState = {
    posts: [
        {
            id: 0,
            title: 'title-1',
            description: 'description-1'
        },
        {
            id: 1,
            title: 'title-2',
            description: 'description-2'
        },
        {
            id: 2,
            title: 'title-3',
            description: 'description-3'
        }
    ]
};

const store = createStore(reducer, defaultState, enhancer);

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

window.store = store;

export default store