import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    state = {
        email: '',
        pass: ''
    };

    render() {
        return (
            <div>
                <div>
                    <h3>Login form</h3>
                    <form onSubmit = { this.handleSubmit } >
                        <input placeholder="Email"
                               value = { this.state.email }
                               onChange = { this.handleChange('email') }
                               type="email"/>
                        <input placeholder="Password"
                               onChange = { this.handleChange('pass') }
                               value = { this.state.pass }
                               type="password"/>
                        <input type="submit" value="Post"/>
                    </form>
                </div>
            </div>
        )
    }

    handleChange = input => ev => {
        this.setState({
            [input]: ev.target.value
        })
    };

    handleSubmit = (ev) => {
        ev.preventDefault();

        console.error('handleSubmit');

        this.setState({
            email: '',
            pass: ''
        });

        this.context.router.push('/posts');
    }
}

export default connect(null, null)(Login)