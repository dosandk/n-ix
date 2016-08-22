import React, { Component } from 'react';
import { Link } from 'react-router'
import { logout } from '../AC/authActions'
import { connect } from 'react-redux'

class Header extends Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const { user } = this.props;

        const userLinks = (
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    User: { user.username }
                </a>
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#" onClick={ this.logout.bind(this) }>Logout</a>
                    </li>
                </ul>
            </div>
        );

        const guestLinks = (
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    User: Not authorized
                </a>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </div>
        );

        return (
            <header className="navbar navbar-default">
                { user.isAuthenticated ? userLinks : guestLinks }
            </header>
        )
    }
}

export default connect((state) => state.auth, { logout })(Header);