import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import * as types from '../actions/types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class Footer extends Component {
  onPressFilter(type) {
    console.log('onPressFilter =>', type);
  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Button
            disabled
            title="All"
            onPress={() => this.onPressFilter(types.FILTER_TYPE.ALL)}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            style={{ flex: 1 }}
            title="Active"
            onPress={() => this.onPressFilter(types.FILTER_TYPE.ACTIVE)}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            style={{ flex: 1 }}
            title="Complete"
            onPress={() => this.onPressFilter(types.FILTER_TYPE.COMPLETE)}
          />
        </View>
      </View>
    );
  }
}

export default connect()(Footer);
