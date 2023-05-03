import { PropTypes, ImageGalleryItem, Container } from './exports';

const ImageGallery = ({ hits, modalClick }) => (
  <Container>
    {hits.map(item => (
      <ImageGalleryItem key={item.id} item={item} modalClick={modalClick} />
    ))}
  </Container>
);

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  modalClick: PropTypes.func.isRequired,
};

export default ImageGallery;
