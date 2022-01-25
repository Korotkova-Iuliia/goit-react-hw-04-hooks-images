import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ listImages }) => {
  return (
    <ul>
      {listImages.map(dataImage => {
        return <ImageGalleryItem key={dataImage.id} dataImage={dataImage} />;
      })}
    </ul>
  );
};
export default ImageGallery;
// return <ImageGalleryItem key={dataImage.id} dataImage={dataImage} />;
