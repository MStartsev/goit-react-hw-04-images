import css from './ImageGallery.module.css';

export const Container = ({ children }) => (
  <ul className={css.container}>{children}</ul>
);
