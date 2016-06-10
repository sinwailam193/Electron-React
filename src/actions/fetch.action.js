import Axios from 'axios';
import { client_id, url } from '../../config';

export const PLAYLIST = "PLAYLIST";
export const SETSONG = "SETSONG";

export function fetch_playlist(id) {
  const request = Axios.get(`${url}?client_id=${client_id}`);
  return {
    type: PLAYLIST,
    payload: request
  };
}

export function set_song(song) {
  return {
    type: SETSONG,
    payload: song
  };
}
