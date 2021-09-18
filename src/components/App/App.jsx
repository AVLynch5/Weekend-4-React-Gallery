import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div className="Subheader">
          <h3 className="subheader-title">Picture Gallery</h3>
        </div>
        <div className="gallery-container">
          <h4>.map with child divs here</h4>
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
