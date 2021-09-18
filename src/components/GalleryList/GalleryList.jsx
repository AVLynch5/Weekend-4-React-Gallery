import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList(props) {
    return(
        <>
            <div className="Subheader">
                <h3 className="subheader-title">Picture Gallery</h3>
            </div>
            <div className="gallery-container">
                {props.list.map(post => 
                    (<GalleryItem
                        post={post}
                        setShowImage={setShowImage}
                        putLikePost={putLikePost}
                        deletePost={deletePost}
                    />)
                )}
            </div>
        </>
    );
}

export default GalleryList;