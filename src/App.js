import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from './actions/';

import AddTodo from './components/AddTodo';
import List from './components/List';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(addTodo('Ride a bicycle'));
    this.props.dispatch(addTodo('Listen to the music'));
    this.props.dispatch(addTodo('Do homework'));
  }
  render() {
    return (
      <View style={styles.container}>
        <AddTodo style={{ flex: 1 }} />
        <List />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 16
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default connect()(App);
