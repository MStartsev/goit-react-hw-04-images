import css from './Modal.module.css';

export const LargeImage = ({ largeImageURL, children }) => (
  <div className={css['large-image']}>
    <img className={css.image} src={largeImageURL} alt="" />
    {children}
  </div>
);

export const Overlay = ({ onClick, children }) => (
  <div className={css.overlay} onClick={onClick}>
    {children}
  </div>
);
