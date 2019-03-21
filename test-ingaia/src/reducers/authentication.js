import { AUTHENTICATE_USER } from 'actions/types';

const INITIAL_STATE = {
  authenticated: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case AUTHENTICATE_USER:
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
}