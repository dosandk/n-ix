import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'

class AppContainer extends Component {
    render() {
        return (
            <Provider store = { store }>
                <div>
                    { this.props.children }
                </div>
            </Provider>
        )
    }
}

export default AppContainer
