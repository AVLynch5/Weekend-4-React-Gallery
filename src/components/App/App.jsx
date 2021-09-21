//import list
import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
//components
import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
//MUI
import Container from '@mui/material/Container';
//font
import '@fontsource/balsamiq-sans/400-italic.css'; // Select either normal or italic.

function App() {

  //destructuring
  const [postList, setPostList] = useState([]);
  const [newPostDescription, setNewPostDescription] = useState('');
  const [newPostPath, setNewPostPath] = useState('');

  //Page Ready - Calls GET function on page load
  useEffect(() => {
    getGallery();
  }, []);


  //GET function - updates value of postList array with DB objects
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

  //PUT function - called by handle function - takes postId and postLikes as arguments. Sends postId as route param and postLikes as data object, then calls GET function.
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

  //DELETE function - takes postId as input param and sends as route param, then calls GET function
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

  //POST function - event triggered by submit button click on the DOM. Prevent default stops default form behavior. Sends object containing form inputs to the DB.
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

  //Render on the DOM
  return (
    <div className="App">
      {/* Add header code to a component and import it here */}
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {/* MUI container SHOULD center contents horizontally - flexbox. sx param - automatic margins */}
      <Container>
        {/* Calls GalleryList component containing .map and elements to be rendered. Calls required props */}
        <GalleryList
          list={postList}
          deletePost={deletePost}
          putLikePost={putLikePost}
        />
        {/* Calls GalleryForm component containing new post inputs and submit button. Calls required props */}
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
