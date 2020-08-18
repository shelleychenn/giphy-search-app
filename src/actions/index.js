//ACTION SEARCH
const searchGifs = (gifs) => {
  return {
    type: 'SEARCH',
    payload: gifs,
  };
};

export default searchGifs;
