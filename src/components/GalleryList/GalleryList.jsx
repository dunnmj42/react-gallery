import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ imageList, likeImage }) {
  return (
    <div>
        {imageList.map((image) => (
        <GalleryItem
            image={image}
            key={image.id}
            likeImage={likeImage}
        />
      ))}
    </div>
  );
}

export default GalleryList;
