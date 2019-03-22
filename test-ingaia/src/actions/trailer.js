import axios from 'axios';
import { GET_TRAILERS, GET_TRAILER } from 'actions/types';

export function getTrailers(count = 5) {
  return async(dispatch) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          part: 'snippet',
          maxResults: count,
          key: "AIzaSyAlCQlqlwWPevosMTd3pt_gottktLDtwyc",
          playlistId: "PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF"
        }
      });
      
      dispatch({
        type: GET_TRAILERS,
        payload: { response: response.data.items, total: count }
      })
    } catch(error) {

    }
  }
}

export function getTrailer(name) {
  return async(dispatch) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 1,
          key: "AIzaSyAlCQlqlwWPevosMTd3pt_gottktLDtwyc",
          q: name
        }
      });
      
      dispatch({
        type: GET_TRAILER,
        payload: response.data.items[0]
      })
    } catch(error) {

    }
  }
}

