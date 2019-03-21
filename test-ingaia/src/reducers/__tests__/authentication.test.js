import authenticationReducer from 'reducers/authentication';
import { AUTHENTICATE_USER } from 'actions/types';

it('handles actions of AUTHENTICATE_USER', () => {
  const action = {
    type: AUTHENTICATE_USER,
    payload: true
  };

  const newState = authenticationReducer([], action);

  expect(newState).toEqual({ authenticated: true });
});
