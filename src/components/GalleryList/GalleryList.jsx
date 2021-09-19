import GalleryItem from "../GalleryItem/GalleryItem";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

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
                    spacing={1}
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
