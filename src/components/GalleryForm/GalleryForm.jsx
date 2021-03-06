import './GalleryForm.css';
//MUI
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
//never got to this one... sweetAlerts make warning/delete alerts easier
import Alert from '@mui/material/Alert';

function GalleryForm({addPost, setNewPostDescription, setNewPostPath, newPostDescription, newPostPath}) {
    //handleAddPost triggered on submit button click. Passes event object to addPost function for Axios call, then resets input field variables to "clear inputs"
    const handleAddPost = (event) => {
        addPost(event);
        setNewPostDescription('');
        setNewPostPath('');
    }

    //renders on the DOM
    return (
        <>
        <div className="Subheader">
            <h3 className="subheader-title">Add a New Post</h3>
        </div>
        <Box className="galleryform-container" border={3} borderColor="black" pt={2}>
            {/* On button click, handleAddPost called. Info entered into text fields sent to DB. Textfield required props mean inputs must be filled out.  */}
            <form onSubmit={handleAddPost}>
                <TextField required size="small" value={newPostDescription} id="description" label="Image Description" type="text" onChange={(event) => setNewPostDescription(event.target.value)}/>
                <TextField required size="small" value={newPostPath} id="path" label="Image Path" type="url" onChange={(event) => setNewPostPath(event.target.value)}/>
                <Button style={{height: 39}} variant="contained" endIcon={<AddCircleIcon fontSize="small"/>} type="submit">Add Post</Button>
            </form>
        </Box>
        </>
    );
}

export default GalleryForm;