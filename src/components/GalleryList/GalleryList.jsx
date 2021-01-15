import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({imageList}) {
  return (
    <div>
      <GalleryItem
        imageList={imageList}
      />
    </div>
  );
}

export default GalleryList;
