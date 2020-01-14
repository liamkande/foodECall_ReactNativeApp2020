import React from 'react'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import AppTitle from '../components/AppTitle'
import IconBtn from '../components/IconBtn'
import HomeScreen from '../screens/HomeScreen'
import AccountScreen from '../screens/Account'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import CameraScreen from '../screens/Camera'
import MapScreen from '../screens/Map'
import SettingsScreen from '../screens/Settings'
import AddressesScreen from '../screens/Addresses'
import AddressesFormScreen from '../screens/AddressesForm'
import AddrHmFormScreen from '../screens/AddressesForm'
import AddrWkFormScreen from '../screens/AddressesForm'
import AddrCpFormScreen from '../screens/AddressesForm'
import AddrCsFormScreen from '../screens/AddressesForm'
import AboutUsScreen from '../screens/AboutUs'
import PaymentsScreen from '../screens/Payments'
import PaymentsFormScreen from '../screens/PaymentForm'
import EditScreen from '../screens/SignUp'
import DrawerContainer from '../screens/DrawerContainer'
import PayHomeScreen from '../screens/PayHome'
import AddSubscriptionScreen from '../screens/AddSubscription'
import MySearchScreen from '../screens/SearchScreen'
import NewMySearchScreen from '../screens/NewSearchScreen'
import ResultsShow from '../screens/ResultsShowScreen'

export const HomeNavigator = createAppContainer(createStackNavigator(

  {
    Home: {
      screen:HomeScreen ,
      navigationOptions: ({ navigation }) => ({
        headerTitle:(<AppTitle title='Food-E-Call' />),
        headerLeft: (
          <IconBtn name='ios-menu'
                   size={30}
                   iconStyle={{marginLeft: 17}}
                   onPress={() => navigation.openDrawer()}
                   />
      ),
        headerRight: (
          <IconBtn name='ios-search'
                   size={30}
                   iconStyle={{marginRight: 17}}
                   onPress={() => navigation.navigate('NewMySearch')}
                   />
      ),
      })
    },
    MySearch: {
      screen: MySearchScreen,
      navigationOptions: {
      header: null
      }
    },
    NewMySearch: {
      screen: NewMySearchScreen,
      navigationOptions: {
      header: null
      }
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
      header: null
    }
  },
    Map: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
      title: 'Map View',
      headerLeft: (
        <IconBtn name='ios-arrow-back'
                 size={30}
                 iconStyle={{marginLeft: 17}}
                 onPress={() => navigation.goBack()}
                 />
      )
    })
  },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
      header: null
      }
    },
    Addresses: {
      screen: AddressesScreen,
      navigationOptions: {
      header: null
    }
  },
  AddressesForm: {
    screen: AddressesFormScreen,
    navigationOptions: {
    header: null
    }
  },
  AddrHmForm: {
    screen: AddrHmFormScreen,
    navigationOptions: {
    header: null
  }
},
  AddrWkForm: {
    screen: AddrWkFormScreen,
    navigationOptions: {
    header: null
    }
  },
  AddrCpForm: {
    screen: AddrCpFormScreen,
    navigationOptions: {
    header: null
    }
  },
  AddrCsForm: {
    screen: AddrCsFormScreen,
    navigationOptions: {
    header: null
    }
  },
  AboutUs: {
    screen: AboutUsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'About Us',
      headerLeft: (
        <IconBtn name='ios-arrow-back'
                 size={30}
                 iconStyle={{marginLeft: 17}}
                 onPress={() => navigation.goBack()}
                 />
        )
  })
},
  Payments: {
    screen: PaymentsScreen,
    navigationOptions: {
    header: null
    }
  },
  PaymentsForm: {
    screen: PaymentsFormScreen,
    navigationOptions: {
    header: null
    }
  },
  Edit: {
      screen: EditScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Edit Profile',
        headerLeft: (
          <IconBtn name='ios-close'
                   size={50}
                   iconStyle={{marginLeft: 17}}
                   onPress={() => navigation.goBack()}
                   />
        ),
      })
    },
    PayHome: {
      screen: PayHomeScreen,
      navigationOptions: {
      header: null
      }
    },
    AddSubscription: {
      screen: AddSubscriptionScreen,
      navigationOptions: {
        tabBarLabel: 'Payment Card',

      }
    },
    ResultsShow: {
      screen: ResultsShow,
      navigationOptions: {
      header: null
      }
    },



  }
))

HomeNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.routes.some(route => route.routeName === 'Camera')) {
    tabBarVisible = false
  }
  if (navigation.state.routes.some(route => route.routeName === 'Map')) {
    tabBarVisible = false
  }
  return {
    tabBarVisible,
  }
}

export const OrderHistNavigator = createAppContainer(createStackNavigator(
  {
    OrderHistory: {
      screen: OrderHistoryScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle:'Order History',
        headerLeft: (
          <IconBtn name='ios-menu'
                   size={30}
                   iconStyle={{marginLeft: 17}}
                   onPress={() => navigation.openDrawer()}
                   />
      ),
      })
    }
  }
))

export const ShopCartNavigator = createAppContainer(createDrawerNavigator({
  ShoppingCart: MapScreen
},
{
    drawerPosition: 'right',
    initialRouteName: 'ShoppingCart',
    contentComponent: DrawerContainer
  }
))


export const MainHomeNavigator = createAppContainer(createDrawerNavigator({
  myDrawer: HomeNavigator
},
{
    drawerPosition: 'left',
    initialRouteName: 'myDrawer',
    contentComponent: DrawerContainer

  }
))
