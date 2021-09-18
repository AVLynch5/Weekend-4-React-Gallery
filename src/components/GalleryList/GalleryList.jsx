function GalleryList() {
    return(
        <>
            <div className="Subheader">
                <h3 className="subheader-title">Picture Gallery</h3>
            </div>
            <div className="gallery-container">
                {postList.map(post => (
                    
                ))}
            </div>
        </>
    );
}

export default GalleryList;