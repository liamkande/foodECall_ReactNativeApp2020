import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCategories, getRestaurants, updateCategoryId} from '../actions/post'
import { updateEmail, updatePassword, updateFirstNm, updateLastNm, updatePhone, updateCity, signup, updateUser} from '../actions/user'

import { Ionicons } from '@expo/vector-icons'
import { FlatList, Modal, SafeAreaView, Text, View, TouchableHighlight, TextInput, Image, TouchableOpacity, ImageBackground, Dimensions, StyleSheet } from 'react-native'
import firebase from 'firebase'
import AsyncImageAnimated from '../components/AsyncImageAnimated'
import AppTitle from '../components/AppTitle'
import MyDrawer from '../components/MyDrawer'
import { AppStyles } from '../AppStyles'




// screen sizing
const { width, height } = Dimensions.get('window')
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height

const numColumns = 3
// item size
const PRODUCT_ITEM_HEIGHT = 88
const PRODUCT_ITEM_OFFSET = 3
const PRODUCT_ITEM_MARGIN = PRODUCT_ITEM_OFFSET * 1.5


class Home extends Component {

  componentDidMount() {
  this.props.getCategories()
  
}


  onPress = (id) => {
    
    this.props.updateCategoryId(id)
    this.props.getRestaurants([id],`${this.props.currentCity}` )
    
    this.props.navigation.navigate('RestaurantList')
    
  }

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.onPress(item.id)}>
      <View style={styles.container}>
        <AsyncImageAnimated animationStyle={'fade'} placeholderColor={AppStyles.color.placeholder} style={styles.photo} source={{ uri: item.url}} />
        <View style={styles.overlay} />
        <Text numberOfLines={3} style={styles.title}>
          {item.name}
        </Text>
        </View>
    </TouchableOpacity>
)

  render() {
    return (
      <ImageBackground style={{width: '100%', height: '100%'}}source={{uri: `${this.props.categories.bgImg}`}}>
        <SafeAreaView style={{flex:1}}>
          <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={this.props.categories.feed}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

Home.navigationOptions = {
  headerTitle:(<AppTitle />),
  headerLeft: (
      <MyDrawer />
    ),
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCategories, getRestaurants, updateCategoryId, signup, updateUser}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    currentCity: state.user.phone,
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: PRODUCT_ITEM_OFFSET,
    width: (SCREEN_WIDTH - PRODUCT_ITEM_MARGIN) / numColumns -
      PRODUCT_ITEM_MARGIN,
    height: PRODUCT_ITEM_HEIGHT,
  },
  title: {
    color: 'white',
    fontSize: 19,
    textAlign: 'center'
  },
  photo: {
    width: (SCREEN_WIDTH - PRODUCT_ITEM_MARGIN) / numColumns -
      PRODUCT_ITEM_MARGIN,
    height: PRODUCT_ITEM_HEIGHT,
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
