import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data))
    },[])
    return (
        <>
            {
                post.map(pt => <Post post={pt} key={pt.id}></Post>)
            }
        </>
    );
};

export default Home;