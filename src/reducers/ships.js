import {REQUEST_SHIPS, RECEIVE_SHIPS} from '../actions';

export default function ShipsReducer(state = {}, action) {
  switch(action.type) {
    case REQUEST_SHIPS:
      return Object.assign({}, state, {
        timestamp: Date.now()
      });
    case RECEIVE_SHIPS:
      console.log('in reducer');
      return Object.assign({}, state, {
        timestamp: Date.now()
      });
    default:
      return state;
  }
}
