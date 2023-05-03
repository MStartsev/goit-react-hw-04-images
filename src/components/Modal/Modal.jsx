import { useEffect, PropTypes, Overlay, LargeImage } from './exports';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyClose = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyClose);

    return () => window.removeEventListener('keydown', handleKeyClose);
  }, [onClose]);

  const handleBackdropClose = e => {
    if (e.currentTarget === e.target) onClose();
  };

  return (
    <Overlay onClick={handleBackdropClose}>
      <LargeImage largeImageURL={largeImageURL}></LargeImage>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
