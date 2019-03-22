import { GET_TRAILERS, GET_TRAILER } from 'actions/types';

const INITIAL_STATE = {
  trailers: []
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_TRAILERS:
      return { ...state, trailers: action.payload.response, total: action.payload.total };
    case GET_TRAILER:
      return { ...state, trailer: action.payload };
    default:
      return state;
  }
}