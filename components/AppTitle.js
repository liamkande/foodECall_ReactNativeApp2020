import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function AppTitle({title}) {
  return (
    <View style={{flexDirection:'row'}}>
      <Ionicons name='ios-restaurant'
                size={25}
                color='#E23E81'
                />
        <Text style={{fontSize:20,
                      fontWeight:'600',
                      marginRight:5,
                      marginLeft:5,
                      color:'#2856AB'}}>{title}</Text>
      <Ionicons
        name='ios-restaurant'
        size={25}
        color='#E23E81'
      />
      </View>
  )
}


//cleaned
