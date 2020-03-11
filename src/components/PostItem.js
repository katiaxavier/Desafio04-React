import React from 'react';
import n from '../assets/nao.png';

function PostItem({ post }) {
    return (
        <div>
            <img className="img" src={n} />
            <span>{post.author.name}</span>
            <br />
            <span>{post.date}</span>
        </div>
    )
}

export default PostItem;