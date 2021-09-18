function GalleryForm({addPost, setNewPostDescription, setNewPostPath}) {
    return (
        <>
        <div className="Subheader">
            <h3 className="subheader-title">Add a New Post</h3>
        </div>
        <div className="galleryform-container">
            <form onSubmit={addPost}>
                <input id="description" onChange={(event) => setNewPostDescription(event.target.value)}/>
                <input id="path" onChange={(event) => setNewPostPath(event.target.value)}/>
                <button type="submit">Add New Post</button>
            </form>
        </div>
        </>
    );
}

export default GalleryForm;