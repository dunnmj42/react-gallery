import { useState } from "react";

function GalleryItem({ image, likeImage }) {
  
    const [showDescription, setShowDescription] = useState(false);
  
  return (
    <div>
        {showDescription ? (
            <p key={image.id} onClick={() => setShowDescription(false)}>{image.description}</p>
        ) : (
            <img key={image.id} src={image.path} onClick={setShowDescription}/>
        )}
        <div>
            <button id={image.id} onClick={likeImage}>Love It</button>
            <p>{image.likes} people love this!</p>
        </div>
    </div>
  );
}

export default GalleryItem;
