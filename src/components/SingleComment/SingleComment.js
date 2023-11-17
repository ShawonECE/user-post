import React from 'react';

const SingleComment = (props) => {
    const {email, body} = props.comment;
    return (
        <div>
            <h4>{email}</h4>
            <p>{body}</p>
        </div>
    );
};

export default SingleComment;