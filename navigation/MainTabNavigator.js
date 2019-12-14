import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { MainHomeNavigator, ShopCartNavigator, OrderHistNavigator } from './StackNavigator'
import TabBarIcon from '../components/TabBarIcon'


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: MainHomeNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({focused}) => (
        <TabBarIcon
          name='ios-home'
          focused={focused}
        />
      )
    },
    config
  },
  Orders: {
    screen: OrderHistNavigator,
    navigationOptions: {
      tabBarLabel: 'Order History',
      tabBarIcon: ({focused}) => (
        <TabBarIcon
          name='ios-paper'
          focused={focused}
        />
      )
    },
    config
  },
  ShopCart: {
    screen: ShopCartNavigator,
    navigationOptions: {
      tabBarLabel: 'Shopping Cart',
      tabBarIcon: ({focused}) => (
            <TabBarIcon
              name='ios-basket'
              focused={focused}
            />
      )
    },
    config
  },
});

export default createAppContainer(TabNavigator)


//cleaned
