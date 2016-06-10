import { PLAYLIST, SETSONG } from '../actions/fetch.action';

const INITIAL_STATE = {tracks: [], song: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type){
    case PLAYLIST:
      return {...state, tracks: [...action.payload.data.tracks]};
    case SETSONG:
      return {...state, song: action.payload};
    default:
      return state;
  }
}
