import React, { useState, useEffect } from 'react';
import PostPreview from '../PostPreview/PostPreview';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);
    //console.log(posts);
    return (
        <div>
            <h1 className='text-center'>User Posts</h1> 
            {
                posts.map(post => <PostPreview post={post}></PostPreview>)
            }
        </div>
    );
};

export default Home;