import React, { useState, useEffect } from 'react';
import axios from "axios";
import GalleryList from '../GalleryList/GalleryList'
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

  const likeImage = (event) => {

    event.preventDefault();
    let id = event.target.id;

    console.log("Liking image with id:", id);

    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        getImages();
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
        <GalleryList
          imageList={imageList}
          likeImage={likeImage}
        />
      </div>
    );
}

export default App;
