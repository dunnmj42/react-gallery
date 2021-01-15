function GalleryItem({ image }) {
  return (
    <div>
        <img key={image.id} src={image.path} />
    </div>
  );
}

export default GalleryItem;
