import React from 'react';
import { Link } from 'react-router'

export default (props) => {
    return (
        <header>
            <div>
                <div>User name</div>
                <Link to='/login'>Login</Link>
                <div>Logout</div>
            </div>
        </header>
    )
};