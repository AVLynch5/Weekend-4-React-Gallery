import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({list, deletePost, putLikePost}) {
    return(
        <>
            <div className="Subheader">
                <h3 className="subheader-title">Picture Gallery</h3>
            </div>
            <div className="gallery-container">
                {list.map(post => 
                    (<GalleryItem
                        key={post.id}
                        post={post}
                        putLikePost={putLikePost}
                        deletePost={deletePost}
                    />)
                )}
            </div>
        </>
    );
}

export default GalleryList;