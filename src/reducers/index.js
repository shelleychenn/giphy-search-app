import { combineReducers } from 'redux';
import gifsDisplayReducer from './gifsDisplayReducer';

const rootReducer = combineReducers({
  gifsDisplay: gifsDisplayReducer,
});

export default rootReducer;
