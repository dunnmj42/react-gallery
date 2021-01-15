function GalleryItem({ imageList }) {
  return (
    <div>
      {imageList.map((image) => (
        <img key={image.id} src={image.path} />
      ))}
    </div>
  );
}

export default GalleryItem;
