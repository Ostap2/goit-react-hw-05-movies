import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '0faef55576804b8824855a6bbe4c2da0';

export const searchMoviesApi = (query) => {
  return axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
      query: query,
    },
  });
};
