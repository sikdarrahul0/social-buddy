import React from 'react';
import './Post.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#ffc93c'
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

const Post = (props) => {
    const classes = useStyles();
    const {post} = props;
    return (
        <div className="post">
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    {post.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {post.body}
                    </Typography>
                    <Link to={`/post/${post.id}`}>
                    <Button variant="contained" color="primary" size="small">Post Details</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
};

export default Post;