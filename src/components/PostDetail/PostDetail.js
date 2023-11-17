import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserName from '../UserName/UserName';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then (data => setPost(data))
    }, []);
    const {body, userId} = post;
    
    return (
        <div>
            <UserName userId={userId}></UserName>
            <p>{body}</p>
            <h4>Comments</h4>
            <Comments postId={postId}></Comments>
        </div>
    );
};

export default PostDetail;