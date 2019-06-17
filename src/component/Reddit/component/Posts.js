import React, { Component } from "react";

class Posts extends Component{
    render(){
        return (
            <ul className='posts'>
               {this.props.posts.map((post,index)=>
                    <li key={index}>
                        <a href={post.url} target='_blank' rel="noopener noreferrer"><span>{post.title}</span></a>
                        <p>Posted by {post.author} {new Date(post.created).toLocaleTimeString()}</p>
                    </li>)}
            </ul>
            )
        
    }
}   
export default Posts