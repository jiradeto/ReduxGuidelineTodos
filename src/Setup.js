import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Platform } from 'react-native';
import reducers from './reducers';
import { logger } from 'redux-logger';

import App from './App';

const store = createStore(reducers, {}, applyMiddleware(logger));

export default class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
