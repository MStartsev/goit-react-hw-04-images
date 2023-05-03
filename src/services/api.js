import axios from 'axios';

const API_KEY = '34327066-9eab2ae5edaa4607329818102';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export const getImages = async (searchQuery = '', page = 1, per_page = 9) => {
  try {
    const response = await axios.get(
      `?q=${searchQuery}&page=${page}&per_page=${per_page}`
    );

    if (!response.data.total) throw new Error(response.statusText);
    return response.data;
  } catch (error) {
    return {
      hits: [],
      errorText:
        'Sorry, there are no images matching your search query. Please try again.',
    };
  }
};
