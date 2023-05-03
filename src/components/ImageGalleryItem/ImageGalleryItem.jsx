import { PropTypes, Item, Image } from './exports';

const ImageGalleryItem = ({ item, modalClick }) => (
  <Item onClick={() => modalClick(item.largeImageURL)}>
    <Image src={item.webformatURL} alt={item.tags} />
  </Item>
);

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  modalClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
