import React from 'react';

export default (props) => {
    return (
        <div>
            <h3>
                { props.post.title }
            </h3>
            <div>
                { props.post.description }
            </div>
        </div>
    )
};