import css from './Button.module.css';

export const Button = ({ onClick, children }) => (
  <button className={css.button} onClick={onClick}>
    {children}
  </button>
);
