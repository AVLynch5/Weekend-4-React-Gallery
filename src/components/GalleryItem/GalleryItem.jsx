import {useState} from 'react';
//MaterialUI
import Button from '@mui/material/Button';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Box from '@mui/material/Box';

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
        <Box className="post-container" border={3} borderColor="black" pt={2} width={200} height={250}>
            <div className="post-content" onClick={() => handleImgDescToggle()}>
                {showImage ? (<img src={post.path} />) : (<p>{post.description}</p>)}
            </div>
            <p>This post has {post.likes} likes</p>
            <Button size="small" variant="contained" endIcon={<ThumbUpAltIcon fontSize="small"/>} onClick={() => handlePostLike(post.id, post.likes)}>Like</Button>
            <Button size="small" variant="outlined" startIcon={<DeleteOutlineOutlinedIcon fontSize="small"/>} onClick={() => handlePostDelete(post.id)}>Delete</Button>
        </Box>
    );
}

export default GalleryItem;