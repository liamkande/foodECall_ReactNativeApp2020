import { AppLoading } from 'expo'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import React, { useState } from 'react'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import firebase from './config/firebase'
import AppNavigator from './navigation/AppNavigator'


const middleware = applyMiddleware(thunkMiddleware, logger)
const store = createStore(reducer, middleware)
//console.disableYellowBox = true

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    )
  }
}
