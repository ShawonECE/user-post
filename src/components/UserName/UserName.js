import React, { useState, useEffect } from 'react';

const UserName = (props) => {
    const userId = props.userId;
    const [userName, setUserName] = useState('');
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => setUserName(data.name))
    }, [userId]);
    return (
        <div>
            <h1>{userName}</h1>
        </div>
    );
};

export default UserName;