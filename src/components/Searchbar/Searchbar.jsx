import {
  useState,
  PropTypes,
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './exports';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleNameChange = e =>
    setSearchQuery(e.currentTarget.value.trim().toLowerCase());

  const resetForm = () => setSearchQuery('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!searchQuery) return;

    onSubmit(searchQuery);
    resetForm();
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput value={searchQuery} onChange={handleNameChange} />
        <SearchFormButton type="submit">
          <SearchFormButtonLabel />
        </SearchFormButton>
      </SearchForm>
    </SearchbarContainer>
  );
};

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
