import {
  Component,
  PropTypes,
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './exports';

class Searchbar extends Component {
  state = { searchQuery: '' };

  handleNameChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.trim().toLowerCase() });
  };

  resetForm = () => {
    this.setState({ searchQuery: '' });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery === '') {
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.resetForm();
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
          />
          <SearchFormButton type="submit">
            <SearchFormButtonLabel />
          </SearchFormButton>
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
