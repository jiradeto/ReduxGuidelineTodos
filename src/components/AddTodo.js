import React, { Component } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  state = {
    text: ''
  };

  _onPress = () => {
    this.props.dispatch(addTodo(this.state.text));
  };

  render() {
    return (
      <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center' }}>
        <TextInput
          value={this.state.text}
          onChangeText={text =>
            this.setState({
              text
            })
          }
          style={{
            padding: 20,
            flex: 1,
            backgroundColor: '#ddd',
            borderRadius: 10
          }}
        />
        <Button title="Add" onPress={this._onPress} />
      </View>
    );
  }
}

export default connect()(AddTodo);
