import PropTypes from 'prop-types';
import { Button } from 'components/Button/ButtonElements';

const LoadMoreButton = ({ handleLoadMore }) => (
  <Button onClick={handleLoadMore} type="button">
    Load More
  </Button>
);

LoadMoreButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreButton;
