import PropTypes from 'prop-types';
import { ImageGalleryWrapper } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ listImages, onSelectImages }) => {
  return (
    <ImageGalleryWrapper>
      {listImages.map(dataImage => {
        return (
          <ImageGalleryItem
            key={dataImage.id}
            dataImage={dataImage}
            onSelectImages={onSelectImages}
          />
        );
      })}
    </ImageGalleryWrapper>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  listImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onSelectImages: PropTypes.func.isRequired,
};
