import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setImageList(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {imageList.map((image) => (
          <img key={image.id} src={image.path}/>
        ))}
      </div>
    );
}

export default App;
