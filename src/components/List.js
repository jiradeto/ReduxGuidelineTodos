import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { ADD_ITEM } from '../actions/types';

import ListItem from './ListItem';

class List extends Component {
  getItemKey(item) {
    return item.id;
  }

  renderItem = ({ item }) => {
    return <ListItem todo={item} />;
  };
  render() {
    console.log('render Jaa', this.props);

    return (
      <FlatList
        data={this.props.todos}
        keyExtractor={this.getItemKey}
        renderItem={this.renderItem}
      />
    );
  }
}

const select = store => {
  return { todos: store.todos };
};
export default connect(select)(List);
