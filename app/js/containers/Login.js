import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../AC/authActions'
import { Link } from 'react-router'

class Login extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    state = {
        name: '',
        pass: ''
    };

    render() {
        return (
            <div>
                <div>
                    <Link to='/posts'>Back to posts</Link>
                </div>
                <div>
                    <h3>Login form</h3>
                    <form onSubmit = { this.handleSubmit } >
                        <input placeholder="Name"
                               value = { this.state.name }
                               onChange = { this.handleChange('name') }
                               type="text"/>
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

        this.props.login(this.state).then(
            res => this.context.router.push('/posts'),
            rej => alert(rej)
        );

        this.setState({
            name: '',
            pass: ''
        });
    }
}

export default connect(null, { login })(Login)