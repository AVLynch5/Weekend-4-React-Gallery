import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
import Container from '@mui/material/Container';

function App() {

  //destructuring
  const [postList, setPostList] = useState([]);
  const [newPostDescription, setNewPostDescription] = useState('');
  const [newPostPath, setNewPostPath] = useState('');

  //Page Ready - Calls GET function on page load
  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      console.log(response.data);
      setPostList(response.data);
    }).catch((error) => {
      console.log('Error in GET request', error);
    })
  }

  const putLikePost = (postId, postLikes) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${postId}`,
      data: {likes: postLikes},
    }).then((response) => {
      getGallery();
    }).catch((error) => {
      console.log(error);
    })
  }

  const deletePost = (postId) => {
    axios({
      method: 'DELETE',
      url: `/gallery/${postId}`,
    }).then((response) => {
      getGallery();
    }).catch((error) => {
      console.log(error);
    })
  }

  const addPost = (event) => {
    event.preventDefault();
    console.log('Submitted form to add new post');
    axios({
      method: 'POST',
      url: '/gallery',
      data: {description: newPostDescription, path: newPostPath},
    }).then((response) => {
      getGallery();
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <Container sx={{mx: 'auto'}}>
        <GalleryList
          list={postList}
          deletePost={deletePost}
          putLikePost={putLikePost}
        />
        <GalleryForm
          addPost={addPost}
          setNewPostDescription={setNewPostDescription}
          setNewPostPath={setNewPostPath}
          newPostDescription={newPostDescription}
          newPostPath={newPostPath}
        />
      </Container>
    </div>
  );
}

export default App;
