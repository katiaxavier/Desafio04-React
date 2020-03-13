import React from 'react';
import n from '../assets/nao.png';

function Comment({ comment }) {

    return (
        <div className="post-content">
            <img className="img" src={comment.autor.avatar}></img>
            <div className="bg-gray">
                <span>{comment.autor.name}</span>
                <p>{comment.content}</p>
            </div>
        </div>
    )
}

export default Comment;