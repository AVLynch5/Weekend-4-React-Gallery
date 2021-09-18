import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

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

  const handlePostLike = (postId) => {
    console.log('User liked post with postId', postId);
    putLikePost(postId);
  }

  const putLikePost = (postId) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${postId}`,
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
              <button onClick={() => handlePostLike(post.id)}>Like Post</button>
            </div>
        ))}
      </div>
      <div className="Subheader">
        <h3 className="subheader-title">Add a New Post</h3>
      </div>
      <div className="galleryform-container">
        <h4>form with inputs and add post button here</h4>
      </div>
    </div>
  );
}

export default App;
