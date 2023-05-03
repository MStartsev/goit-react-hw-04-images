import css from './App.module.css';

export const Container = ({ children }) => (
  <div className={css.container}>{children}</div>
);

export const ErrorText = ({ children }) => (
  <p className={css.text}>{children}</p>
);
