import {
  Component,
  getImages,
  Searchbar,
  ImageGallery,
  LoadMoreButton,
  Modal,
  Loader,
  Container,
  ErrorText,
} from './exports';

class App extends Component {
  state = {
    errorText: '',
    searchQuery: '',
    hits: [],
    largeImageURL: '',
    page: 1,
    isLoading: false,
    showModal: false,
    isShowButton: false,
    per_page: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page, per_page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ isLoading: true });

      getImages(this.state.searchQuery, page, per_page)
        .then(({ hits, totalHits, errorText }) =>
          this.setState(prevState => ({
            hits: [...prevState.hits, ...hits],
            isShowButton: page < Math.ceil(totalHits / per_page),
            isLoading: false,
            errorText,
          }))
        )
        .catch(error => console.log(error));
    }
  }

  handleFormSubmit = searchQuery => {
    if (searchQuery === this.state.searchQuery) return;

    this.setState({
      searchQuery,
      hits: [],
      page: 1,
      isShowButton: false,
    });
  };

  handleLoadMore = () =>
    this.setState(prevState => ({ page: prevState.page + 1 }));

  openModal = largeImageURL => {
    this.setState({ largeImageURL, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      errorText,
      hits,
      largeImageURL,
      isLoading,
      showModal,
      isShowButton,
    } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {errorText && <ErrorText>{errorText}</ErrorText>}

        <ImageGallery hits={hits} modalClick={this.openModal} />
        {isLoading && <Loader />}
        {isShowButton && !isLoading && (
          <LoadMoreButton handleLoadMore={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </Container>
    );
  }
}

export default App;
