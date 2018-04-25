import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

export default props => {
  const { text, completed, id } = props.todo;

  return (
    <TouchableOpacity onPress={() => props.onPress(id)}>
      <View
        style={{
          flexDirection: 'row',
          padding: 20,
          borderBottomColor: '#d4d4d4',
          borderBottomWidth: 1
        }}
      >
        <Text style={completed ? styles.textLine : styles.text}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'none',
    color: 'black'
  },
  textLine: {
    color: 'green',
    textDecorationLine: 'line-through'
  }
});
