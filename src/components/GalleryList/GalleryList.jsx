function GalleryList() {
    return(
        <>
            <div className="Subheader">
                <h3 className="subheader-title">Picture Gallery</h3>
            </div>
            <div className="gallery-container">
                {postList.map(post => (
                    <div className="post-container" key={post.id}>
                        <div className="post-content" onClick={() => handleImgDescToggle()}>
                            {showImage ? (<img src={post.path} />) : (<p>{post.description}</p>)}
                        </div>
                        <p>This post has {post.likes} likes</p>
                        <button onClick={() => handlePostLike(post.id, post.likes)}>Like Post</button>
                        <button onClick={() => handlePostDelete(post.id)}>Delete Post</button>
                    </div>
                ))}
            </div>
        </>
    );
}