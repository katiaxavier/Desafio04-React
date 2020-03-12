import React from 'react';
import n from '../assets/nao.png';

function Comment({ comment }) {
    
    return (
        <div>
            <img className="img" src={n} />
            <span>{comment.autor.name}
            </span>
            <p>{comment.content}</p>
        </div>
    )
}

export default Comment;