import css from './ImageGalleryItem.module.css';

export const Image = ({ src, alt }) => (
  <img className={css.image} src={src} alt={alt}></img>
);

export const Item = ({ onClick, children }) => (
  <li className={css.item} onClick={onClick}>
    {children}
  </li>
);
