import React, { useEffect, useState } from 'react';
import './Comment.css';

const Comment = (props) => {
    const {id} = props;
    const [comment, setComment] = useState([]);
    const [image, setImage] = useState([]); 

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response =>response.json())
        .then(data => setComment(data))
    },[id])

     useEffect(() =>{
        fetch(`https://randomuser.me/api/?results=100`)
        .then(response => response.json())
        .then(data => {
            const img = data.results;
            const imgUrl = img.slice(0,comment.length);
            const url = imgUrl.map(ig => ig.picture.large);
            setImage(url);
            console.log(image);
        })
    },[comment]) 
        
    return (
        <>
        <h3>Comment Box</h3>
        <div className="comment-box">
            
                {
                    comment.map((cmnt,index) => 
                    <div className="comment-box-details">
                        <div>
                            <img className="img-design" src={image[index]} />
                        </div>
                        <div className="comment-details">
                            <h5>Email: {cmnt.email} </h5><br/>
                            <p><strong>comment: </strong>{cmnt.body}</p> 
                        </div>
                    </div>
                    )
                }
            
        </div>
        </>
    );
};

export default Comment;