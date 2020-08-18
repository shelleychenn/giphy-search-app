//REDUCER - MODIFY STORE BASED ON ACTION
const gifsDisplayReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.payload;
    default:
      return state;
  }
};

export default gifsDisplayReducer;
