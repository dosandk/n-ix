import React from 'react';

export default (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h3>User: { props.post.user }</h3>
                <h4>Title: { props.post.title || 'No title' } </h4>
                <p>{ props.post.description || 'No description' }</p>
                <hr />
            </div>
        </div>
    )
};