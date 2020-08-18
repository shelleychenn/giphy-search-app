//ACTION SEARCH
export const searchGifs = (gifs) => {
  return {
    type: 'SEARCH',
    payload: gifs,
  };
};
