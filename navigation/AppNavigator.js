import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import AuthNavigator from './AuthNavigator'


const SwitchNavigator = createSwitchNavigator({
  Home: {
    screen: MainTabNavigator
  },
  Auth: {
    screen: AuthNavigator
  }

},
  {
    initialRouteName: 'Auth',
  }

);

export default createAppContainer(SwitchNavigator)


//cleaned
