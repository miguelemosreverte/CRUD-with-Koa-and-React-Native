import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import {news_reducer} from './src/reducers/news';
import AppContainer from './src/containers/AppContainer'

const client = axios.create({
  baseURL: 'http://192.168.0.105:5000',
  responseType: 'json'
});

const store = createStore(news_reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
