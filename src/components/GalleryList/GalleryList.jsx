import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({imageList}) {
  return (
    <div>
        {imageList.map((image) => (
        <GalleryItem
            image={image}
            key={image.id}
        />
      ))}
    </div>
  );
}

export default GalleryList;
