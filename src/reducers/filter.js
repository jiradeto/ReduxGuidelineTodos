const INITIAL_STATE = {};
import * as types from '../actions/types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY:
      return action.payload;
    default:
      return state;
  }
};
