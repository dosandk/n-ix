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
            <div>
                <div>{ user.username }</div>
                <a href="#" onClick={ this.logout.bind(this) }>Logout</a>
            </div>
        );

        const guestLinks = (
            <div>
                <Link to='/login'>Login</Link>
            </div>
        );

        return (
            <header>
                <div>
                    { user.isAuthenticated ? userLinks : guestLinks }
                </div>
            </header>
        )
    }
}

export default connect((state) => state.auth, { logout })(Header);