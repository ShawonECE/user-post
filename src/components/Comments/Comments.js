import React, { useEffect, useState } from 'react';
import SingleComment from '../SingleComment/SingleComment';

const Comments = (props) => {
    const postId = props.postId;
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [postId]);
    return (
        <div>
            {
                comments.map(comment => <SingleComment comment={comment}></SingleComment>)
            }
        </div>
    );
};

export default Comments;