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
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <header className="navbar navbar-default">
                            <div className="navbar-header">
                                <ul className="nav navbar-nav">
                                    <li>
                                        <Link to='/posts'>Back to posts</Link>
                                    </li>
                                </ul>
                            </div>
                        </header>
                        <div>
                            <h3>Login form</h3>
                            <form onSubmit = { this.handleSubmit } >
                                <div className="form-group">
                                    <input className="form-control"
                                           placeholder="Name"
                                           value = { this.state.name }
                                           onChange = { this.handleChange('name') }
                                           type="text"/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control"
                                           placeholder="Password"
                                           onChange = { this.handleChange('pass') }
                                           value = { this.state.pass }
                                           type="password"/>
                                </div>
                                <input className="btn btn-default" type="submit" value="Login"/>
                            </form>
                        </div>
                    </div>
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