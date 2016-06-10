import { combineReducers } from 'redux';
import fetchSongs from './fetch.reducer';

const rootReducer = combineReducers({
  tracks: fetchSongs
});

export default rootReducer;
