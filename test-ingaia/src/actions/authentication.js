import { AUTHENTICATE_USER } from 'actions/types';

export const signin = (callback) => {
  callback();

  return {
    type: AUTHENTICATE_USER,
    payload: true
  };
}

export const signout = () => {
  return {
    type: AUTHENTICATE_USER,
    payload: false
  };
}