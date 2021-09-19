//MUI
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

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
                <TextField required size="small" value={newPostDescription} id="description" label="Image Description" onChange={(event) => setNewPostDescription(event.target.value)}/>
                <TextField required size="small" value={newPostPath} id="path" label="Image Path" onChange={(event) => setNewPostPath(event.target.value)}/>
                <Button size="medium" variant="contained" endIcon={<AddCircleIcon fontSize="small"/>} type="submit">Add Post</Button>
            </form>
        </div>
        </>
    );
}

export default GalleryForm;