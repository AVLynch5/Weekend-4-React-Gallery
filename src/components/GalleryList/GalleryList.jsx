import GalleryItem from "../GalleryItem/GalleryItem";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function GalleryList({list, deletePost, putLikePost}) {
    return(
        <>
            <div className="Subheader">
                <h3 className="subheader-title">Picture Gallery</h3>
            </div>
            <Container>
                <div className="gallery-container">
                <Grid
                    container
                    direction="row-reverse"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                >
                    {list.map(post => 
                        (<GalleryItem
                            key={post.id}
                            post={post}
                            putLikePost={putLikePost}
                            deletePost={deletePost}
                        />)
                    )}
                </Grid>
                </div>
            </Container>
        </>
    );
}

export default GalleryList;
