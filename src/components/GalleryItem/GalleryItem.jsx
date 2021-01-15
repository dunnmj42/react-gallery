function GalleryItem({ image, likeImage }) {
  return (
    <div>
        <img key={image.id} src={image.path} />
        <button id={image.id} onClick={likeImage}>Love It</button>
        <p>{image.likes} people love this!</p>
    </div>
  );
}

export default GalleryItem;
