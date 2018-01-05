import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        postId: null
    }

    componentDidUpdate(){
        if (this.props.id){
            //IMPORTANT: This 2nd validation is needed to avoid infinite loop of requests
            if(!this.state.postId || (this.state.postId && this.state.postId.id !== this.props.id)){ 
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(
                    response => {
                        // console.log(response);
                        this.setState({ postId: response.data });
                    }
                );
            }
        }
        
    }

    render () {

        let post = <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Please select a Post!</p>;
        // console.log(this.state.postId);
        if(this.state.postId){
            post = (
                <div className="FullPost">
                    <h1>{this.state.postId.title}</h1>
                    <p>{this.state.postId.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        
        return post;
    }
}

export default FullPost;