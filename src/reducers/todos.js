const INITIAL_STATE = [];
import * as types from '../actions/types';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};
