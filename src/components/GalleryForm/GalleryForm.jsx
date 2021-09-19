//MUI
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function GalleryForm({addPost, setNewPostDescription, setNewPostPath, newPostDescription, newPostPath}) {
    const handleAddPost = (event) => {
        addPost(event);
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
                <Button variant="contained" endIcon={<AddCircleIcon />} type="submit">Add New Post</Button>
            </form>
        </div>
        </>
    );
}

export default GalleryForm;