import React from 'react'
import Main from '../screens/Main'
import Login from '../screens/Login'
import SignUpScreen from '../screens/SignUp'
import { createStackNavigator, createAppContainer } from 'react-navigation'


const StackNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      	title: 'Register'
      }
  }
}
)

export default createAppContainer(StackNavigator)

//cleaned
