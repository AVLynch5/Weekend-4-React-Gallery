function GalleryItem({post, setShowImage, putLikePost, deletePost}) {
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
        <div className="post-container" key={post.id}>
            <div className="post-content" onClick={() => handleImgDescToggle()}>
                {showImage ? (<img src={post.path} />) : (<p>{post.description}</p>)}
            </div>
            <p>This post has {post.likes} likes</p>
            <button onClick={() => handlePostLike(post.id, post.likes)}>Like Post</button>
            <button onClick={() => handlePostDelete(post.id)}>Delete Post</button>
        </div>
    );
}

export default GalleryItem;