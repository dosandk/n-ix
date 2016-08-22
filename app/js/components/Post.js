import React from 'react';

export default (props) => {
    return (
        <div>
            <h3>
                User: { props.post.user }
            </h3>
            <h4>
                Title: { props.post.title || 'No title' }
            </h4>
            <div>
                { props.post.description || 'No description' }
            </div>
        </div>
    )
};