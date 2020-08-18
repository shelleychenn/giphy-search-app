import axios from 'axios';
import API_KEY from './API_KEY';

const API_URL = 'api.giphy.com/v1/gifs/search';

const apiHelpers = {
  getGifs: (queryTerm) => {
    return axios.get(`${API_URL}?api_key=${API_KEY}&q=${queryTerm}`);
  },
};

export default apiHelpers;
