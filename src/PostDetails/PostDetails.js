import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#2ec1ac'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const PostDetails = () => {
    const classes = useStyles();
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response =>response.json())
        .then(data => setPost(data))
    },[])
    return (
        <div className="post">
            <Card className={classes.root}>
                <CardContent>
                    <h3>Post</h3>
                    <Typography variant="h5" component="h2">
                    {post.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {post.body}
                    </Typography>
                </CardContent>
            </Card>
            <Comment id={post.id} key={id}></Comment>
        </div>
    );
};

export default PostDetails;