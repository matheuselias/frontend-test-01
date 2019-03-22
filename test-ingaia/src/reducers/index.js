import { combineReducers } from 'redux';
import authentication from 'reducers/authentication';
import trailer from 'reducers/trailer';

export default combineReducers({
  authentication,
  trailer
});