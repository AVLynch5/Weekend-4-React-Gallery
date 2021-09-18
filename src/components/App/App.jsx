import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {

  //destructuring
  const [postList, setPostList] = useState([]);
  const [newPostDescription, setNewPostDescription] = useState('');
  const [newPostPath, setNewPostPath] = useState('');
  const [showImage, setShowImage] = useState(true);

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

  const handleImgDescToggle = () => {
    console.log('Post clicked - toggle');
    setShowImage(!showImage);
  }

  const handlePostLike = (postId, postLikes) => {
    console.log('User liked post with postId', postId);
    putLikePost(postId, postLikes);
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

  const handlePostDelete = (postId) => {
    console.log('User deleted post with ID', postId);
    deletePost(postId);
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
      <div className="Subheader">
        <h3 className="subheader-title">Picture Gallery</h3>
      </div>
      <div className="gallery-container">
        {postList.map(post => (
            <div className="post-container" key={post.id}>
              <div className="post-content" onClick={() => handleImgDescToggle()}>
                {showImage ? (<img src={post.path} />) : (<p>{post.description}</p>)}
              </div>
              <p>This post has {post.likes} likes</p>
              <button onClick={() => handlePostLike(post.id, post.likes)}>Like Post</button>
              <button onClick={() => handlePostDelete(post.id)}>Delete Post</button>
            </div>
        ))}
      </div>
      <GalleryForm
        addPost={addPost}
        setNewPostDescription={setNewPostDescription}
        setNewPostPath={setNewPostPath}
      />
    </div>
  );
}

export default App;
