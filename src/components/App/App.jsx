import {
  useState,
  useEffect,
  getImages,
  Searchbar,
  ImageGallery,
  LoadMoreButton,
  Modal,
  Loader,
  Container,
  ErrorText,
} from './exports';

const startPage = 1;
const per_page = 12;

const App = () => {
  const [errorText, setErrorText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [hits, setHits] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [page, setPage] = useState(startPage);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isShowButton, setIsShowButton] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    setIsLoading(true);

    getImages(searchQuery, page, per_page)
      .then(({ hits, totalHits, errorText }) => {
        setHits(prevHits => [...prevHits, ...hits]);
        setIsShowButton(page < Math.ceil(totalHits / per_page));
        setIsLoading(false);
        setErrorText(errorText);
      })
      .catch(error => console.log(error));
  }, [searchQuery, page]);

  const handleFormSubmit = newSearchQuery => {
    if (newSearchQuery === searchQuery) return;

    setSearchQuery(newSearchQuery);
    setHits([]);
    setPage(startPage);
    setIsShowButton(false);
  };

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  const openModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />

      {errorText && <ErrorText>{errorText}</ErrorText>}

      <ImageGallery hits={hits} modalClick={openModal} />
      {isLoading && <Loader />}
      {isShowButton && !isLoading && (
        <LoadMoreButton handleLoadMore={handleLoadMore} />
      )}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      )}
    </Container>
  );
};

export default App;
