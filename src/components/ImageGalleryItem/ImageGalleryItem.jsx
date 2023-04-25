import { PropTypes, Item, Image } from './exports';

function ImageGalleryItem({ item, modalClick }) {
  return (
    <Item onClick={() => modalClick(item.largeImageURL)}>
      <Image src={item.webformatURL} alt={item.tags} />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  modalClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
