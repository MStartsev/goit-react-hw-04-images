import { Component, PropTypes, Overlay, LargeImage } from './exports';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyClose = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  handleBackdropClose = e => {
    if (e.currentTarget === e.target) this.props.onClose();
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClose}>
        <LargeImage largeImageURL={this.props.largeImageURL}></LargeImage>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
