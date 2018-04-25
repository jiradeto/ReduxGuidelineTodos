import * as types from './types';

let nextTodoId = 0;

export const addTodo = text => ({
  type: types.ADD_ITEM,
  id: nextTodoId++,
  text
});

export const setFilter = filter => ({
  type: types.SET_VISIBILITY,
  filter
});
