import css from './Searchbar.module.css';

export const SearchbarContainer = ({ children }) => <header>{children}</header>;

export const SearchForm = ({ onSubmit, children }) => (
  <form className={css['search-form']} onSubmit={onSubmit}>
    {children}
  </form>
);

export const SearchFormButton = ({ onClick, children }) => (
  <button className={css.button} onClick={onClick}>
    {children}
  </button>
);

export const SearchFormButtonLabel = () => (
  <span className={css['magnifying-glass']}></span>
);

export const SearchFormInput = ({ value, onChange }) => (
  <input
    className={css.input}
    value={value}
    onChange={onChange}
    type="text"
    autoComplete="off"
    autoFocus
    placeholder="Search images and photos"
  />
);
