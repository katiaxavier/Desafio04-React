import React, { Component } from 'react';
import PostItem from "./PostItem";

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Julio Alcantara",
                    avatar: ""
                },
                date: "04 Mar 2020",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        autor: {
                            name: "Diego Fernandes",
                            avatar: ""
                        },
                        content: "balbalba"
                    }
                ]
            }
        ]
    };

    render() {
        const { posts } = this.state;

        return posts.map(post => <PostItem key={post.id} post={post} />)


    }
}

export default PostList;