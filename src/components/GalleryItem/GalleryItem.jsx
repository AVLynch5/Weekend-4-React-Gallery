import {useState} from 'react';
//MaterialUI
import Button from '@mui/material/Button';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function GalleryItem({post, putLikePost, deletePost}) {
    const [showImage, setShowImage] = useState(true);
    const handleImgDescToggle = () => {
        console.log('Post clicked - toggle');
        setShowImage(!showImage);
    }
    const handlePostLike = (postId, postLikes) => {
        console.log('User liked post with postId', postId);
        putLikePost(postId, postLikes);
    }
    const handlePostDelete = (postId) => {
        console.log('User deleted post with ID', postId);
        deletePost(postId);
    }
    
    return(
        <div className="post-container">
            <div className="post-content" onClick={() => handleImgDescToggle()}>
                {showImage ? (<img src={post.path} />) : (<p>{post.description}</p>)}
            </div>
            <p>This post has {post.likes} likes</p>
            <Button size="small" variant="contained" endIcon={<ThumbUpAltIcon fontSize="small"/>} onClick={() => handlePostLike(post.id, post.likes)}>Like</Button>
            <Button size="small" variant="outlined" startIcon={<DeleteOutlineOutlinedIcon fontSize="small"/>} onClick={() => handlePostDelete(post.id)}>Delete</Button>
        </div>
    );
}

export default GalleryItem;