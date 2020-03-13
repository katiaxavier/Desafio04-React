import React from 'react';
import n from '../assets/nao.png';

import Comment from './Comment';

function PostItem({ post }) {
    return (
        <div className="post">
            <div className="post-title">
                <img className="img" src={post.author.avatar}></img>
                <div className="post-header">
                    <div className="post-items">{post.author.name}</div>
                    <div className="font-thing">{post.date}</div>
                </div>
            </div>
            <p className="font-regular">{post.content}</p>
            <hr />

            {post.comments.map(comment => (
                <Comment comment={comment} />
            ))}


        </div>
    )
}


export default PostItem;