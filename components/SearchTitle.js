import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'
import styles from '../styles'
import {pink, white, alertRed} from '../utils/colors'


const SearchTitle = ({navigation}) => {
  return (
    <View style={{flexDirection:'row',justifyContent: 'space-between', marginBottom:10}}>
    <TouchableOpacity  style={styles.row} onPress={() => navigation.goBack()}>
      <FontAwesome style={{marginLeft:17}} name='close' size={40} color={pink} />
      </TouchableOpacity>
      <Text style={[styles.title, {alignSelf:'center', marginRight:10}]}>Search</Text>
    </View>
  )
}

export default withNavigation(SearchTitle)
