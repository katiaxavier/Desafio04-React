import React, { Component } from 'react';
import PostItem from "./PostItem";
// import tony from '../assets/tony.jpg';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: "Tony Stark",
                    avatar: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2015/03/12-Tony-stark-i-am-iron-man.jpg.jpeg"
                },
                date: "13 Mar 2020",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 1,
                        autor: {
                            name: "Diego Fernandes",
                            avatar: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2015/03/12-Tony-stark-i-am-iron-man.jpg.jpeg"
                        },
                        content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
                    }
                ]
            },
            {
                id: 2,
                author: {
                    name: "Capitão America",
                    avatar: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2015/03/12-Tony-stark-i-am-iron-man.jpg.jpeg"
                },
                date: "04 Mar 2020",
                content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
                comments: [
                    {
                        id: 2,
                        autor: {
                            name: "Viuva Negra",
                            avatar: "lll"
                        },
                        content: "balbalba"
                    }
                ]
            }
        ]
    };

    render() {
        const { posts } = this.state;
        console.log(posts.map(post => post.comments.map(comment => comment.autor.name)));

        return posts.map(post => <PostItem key={post.id} post={post} />)

        
    }
}

export default PostList;