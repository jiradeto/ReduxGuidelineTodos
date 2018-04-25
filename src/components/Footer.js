import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import * as types from '../actions/types';
import { connect } from 'react-redux';
import { addTodo, setFilter } from '../actions';

class Footer extends Component {
  onPressFilter(type) {
    this.props.dispatch(setFilter(type));
  }

  renderButton({ filter, text }) {
    return (
      <Button
        disabled={this.props.filter === filter}
        title={text}
        onPress={() => this.onPressFilter(filter)}
      />
    );
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          {this.renderButton({
            filter: types.FILTER_TYPE.ALL,
            text: 'All'
          })}
        </View>
        <View style={{ flex: 1 }}>
          {this.renderButton({
            filter: types.FILTER_TYPE.ACTIVE,
            text: 'Active'
          })}
        </View>
        <View style={{ flex: 1 }}>
          {this.renderButton({
            filter: types.FILTER_TYPE.COMPLETE,
            text: 'Complete'
          })}
        </View>
      </View>
    );
  }
}
const select = store => {
  return {
    filter: store.filter
  };
};
export default connect(select)(Footer);
