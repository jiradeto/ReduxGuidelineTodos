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
        <TouchableOpacity
          style={completed ? styles.circleGreen : styles.circleGrey}
        />
        <Text style={completed ? styles.textLine : styles.text}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleGreen: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'green'
  },
  circleGrey: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#d4d4d4'
  },
  text: {
    marginLeft: 10,
    textDecorationLine: 'none',
    color: 'black'
  },
  textLine: {
    marginLeft: 10,
    color: 'green',
    textDecorationLine: 'line-through'
  }
});
