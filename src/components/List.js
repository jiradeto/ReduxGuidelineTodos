import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';
import { ADD_ITEM } from '../actions/types';
import * as types from '../actions/types';
import ListItem from './ListItem';

class List extends Component {
  getItemKey(item) {
    return item.id.toString();
  }

  onPress(id) {
    this.props.dispatch(toggleTodo(id));
  }

  renderItem = ({ item }) => {
    return (
      <ListItem todo={item} {...this.props} onPress={id => this.onPress(id)} />
    );
  };
  render() {
    return (
      <FlatList
        data={this.props.todos}
        keyExtractor={this.getItemKey}
        renderItem={this.renderItem}
      />
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case types.FILTER_TYPE.COMPLETE:
      return todos.filter(t => t.completed);
    case types.FILTER_TYPE.ACTIVE:
      return todos.filter(t => !t.completed);
    case types.FILTER_TYPE.ALL:
    default:
      return todos;
  }
};

const select = store => {
  return {
    todos: getVisibleTodos(store.todos, store.filter)
  };
};
export default connect(select)(List);
