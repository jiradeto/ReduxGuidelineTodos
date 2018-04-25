import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

export default props => {
  const { text, completed, id } = props.todo;

  return (
    <TouchableOpacity>
      <View
        style={{
          padding: 20,
          borderBottomColor: '#d4d4d4',
          borderBottomWidth: 1
        }}
      >
        <Text> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};
