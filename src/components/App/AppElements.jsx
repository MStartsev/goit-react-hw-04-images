import css from './App.module.css';

export const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export const ErrorText = ({ children }) => {
  return <p className={css.text}>{children}</p>;
};
