import GalleryItem from "../GalleryItem/GalleryItem";
//MUI
import Grid from '@mui/material/Grid';

function GalleryList({list, deletePost, putLikePost}) {
    //rendered on the DOM
    return(
        <>
            <div className="Subheader">
                <h3 className="subheader-title">Picture Gallery</h3>
            </div>
            <div className="gallery-container">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    {list.map(post => 
                        <Grid
                            item
                            xs={3}
                            key={post.id}
                        >
                            <GalleryItem
                            post={post}
                            putLikePost={putLikePost}
                            deletePost={deletePost}
                            />
                        </Grid>
                    )}
                </Grid>
            </div>
        </>
    );
}

export default GalleryList;
