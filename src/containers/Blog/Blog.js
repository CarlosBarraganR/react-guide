import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedId: null
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(
                response => {
                    this.setState({ posts: response.data });
                }
        );
    }

    handlerPostClicked(id){
        this.setState({ selectedId: id });
    }

    render () {

        const posts = this.state.posts.slice(0,4).map(post => {
            return <Post key={ post.id } title={ post.title } clicked={() => this.handlerPostClicked(post.id)}/>
        });

        return (
            <div>
                <section className="Posts">
                    { posts }
                </section>
                <section>
                    <FullPost id={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;