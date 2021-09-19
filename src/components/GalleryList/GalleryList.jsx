import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from '@mui/material/Grid';

function GalleryList({list, deletePost, putLikePost}) {
    return(
        <>
            <div className="Subheader">
                <h3 className="subheader-title">Picture Gallery</h3>
            </div>
            <div className="gallery-container">
                <Grid
                    container
                    direction="row-reverse"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    {list.map(post => 
                        <Grid
                            item
                            xs={2}
                        >
                            <GalleryItem
                            key={post.id}
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
