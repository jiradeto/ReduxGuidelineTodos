import * as types from '../actions/types';
const INITIAL_STATE = types.FILTER_TYPE.ALL;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY:
      return action.filter;
    default:
      return state;
  }
};
