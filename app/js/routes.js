import React from 'react'
import { Router, Route, IndexRoute, Redirect, IndexRedirect, browserHistory, hashHistory } from 'react-router'
import PostsList from './containers/PostsList'
import Login from './containers/Login'
import Root from './containers/AppContainer'
import NotFoundPage from './components/NotFoundPage'

export default (
    <Router history={ browserHistory }>
        <Redirect from="/" to="/posts"/>
        <Route path="/" component={ Root }>
            <Route path="/posts" component={ PostsList }/>
            <Route path="/login" component={ Login }/>
            <Route path="*" component={ NotFoundPage }/>
        </Route>
    </Router>
)
