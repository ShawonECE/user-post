import React from 'react';
import {
    Link
  } from "react-router-dom";
import UserName from '../UserName/UserName';

const PostPreview = (props) => {
    //console.log(props.post);
    const {id, title, userId} = props.post;
    return (
        <div className="container">
            <div className="card" style={{width: '50rem'}}>
            <div className="card-body">
                <UserName userId={userId}></UserName>
                <p className="card-text">{title}</p>
                <Link to={'/post/'+id}><button type="button" class="btn btn-success">See more</button></Link>
            </div>
            </div>
        </div>

        // <div>
        //     <UserName userId={userId}></UserName>
        //     <p>{title}</p>
        //     <Link to={'/post/'+id}><button>See More</button></Link>
        // </div>
    );
};

export default PostPreview;