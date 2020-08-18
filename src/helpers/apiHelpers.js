import axios from 'axios';
import API_KEY from './API_KEY';
import searchGifs from '../actions';

const API_URL = 'https://api.giphy.com/v1/gifs/search';

const apiHelpers = {
  getGifs: (queryTerm) => {
    return (dispatch) => {
      return axios
        .get(`${API_URL}?api_key=${API_KEY}&q=${queryTerm}`)
        .then(({ data }) => {
          dispatch(searchGifs(data.data));
        });
    };
  },
};

export default apiHelpers;
