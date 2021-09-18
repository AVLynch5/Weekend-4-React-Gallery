function GalleryForm({addPost, setNewPostDescription, setNewPostPath, newPostDescription, newPostPath}) {
    const handleAddPost = () => {
        addPost();
        setNewPostDescription('');
        setNewPostPath('');
    }

    return (
        <>
        <div className="Subheader">
            <h3 className="subheader-title">Add a New Post</h3>
        </div>
        <div className="galleryform-container">
            <form onSubmit={handleAddPost}>
                <input value={newPostDescription} id="description" placeholder="Image Description" onChange={(event) => setNewPostDescription(event.target.value)}/>
                <input value={newPostPath} id="path" placeholder="Image Path" onChange={(event) => setNewPostPath(event.target.value)}/>
                <button type="submit">Add New Post</button>
            </form>
        </div>
        </>
    );
}

export default GalleryForm;