import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyle,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
const ImageGalleryItem = ({
  onSelectImages,
  dataImage: { previewURL, largeImageURL, tags, showModal },
}) => {
  return (
    <ImageGalleryItemStyle>
      <ImageGalleryItemImage
        src={previewURL}
        alt={tags}
        onClick={() => onSelectImages(largeImageURL, tags, showModal)}
      />
    </ImageGalleryItemStyle>
  );
};
export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  dataImage: PropTypes.shape({
    previewURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    showModal: PropTypes.string,
  }),
  onSelectImages: PropTypes.func,
};
