import React from 'react';
import n from '../assets/nao.png';

import Comment from './Comment';

function PostItem({ post }) {
    return (
        <div className="post">
            <div className="post-title">
                <img  className="img" src={n}></img>
                <div className="post-header">
                    <div className="post-items">Júlio Alcantra</div>
                    <div className="font-thing">04 Jun 2019</div>
                </div>
            </div>
            <p className="font-regular">{post.content}</p>
            <hr/>
            <div className="post-content">
            <img  className="img" src={n}></img>
                <div className="bg-gray">
                    <span>Júlio Alcantra</span>
                    <p>Top cara, tem vagas sim</p>
                </div>
            </div>
           
        </div>
    )
}

export default PostItem;