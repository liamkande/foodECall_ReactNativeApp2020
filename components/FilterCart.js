import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'
import AsyncImageAnimated from './AsyncImageAnimated'
import { AppStyles } from '../AppStyles'



const PRODUCT_ITEM_OFFSET = 3
const PRODUCT_ITEM_MARGIN = PRODUCT_ITEM_OFFSET * 4

const FilterCart = ({ navigation, item }) => {

  return (
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('MySearch')}>
      <View style={styles.container}>
        <AsyncImageAnimated animationStyle={'fade'} placeholderColor={AppStyles.color.placeholder} style={styles.photo} source={{ uri: item.url }} />
        <View style={styles.overlay} />
        <Text numberOfLines={3} style={styles.title}>
          {item.name}
        </Text>
        </View>
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: PRODUCT_ITEM_MARGIN,
    width: 100,
    height:90,
  },
  title: {
    color: 'white',
    fontSize: 19,
    textAlign: 'center'
  },
  photo: {
    width: 100,
    height: 90,
    borderRadius:10,
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius:10,
    borderColor:'#F19D39',
    borderWidth:3
  }
})

export default withNavigation(FilterCart)
