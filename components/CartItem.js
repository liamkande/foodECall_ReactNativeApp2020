import React from 'react'
import { Text,View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function CartItem ({ name, address, iconStyle, onPress, style, space, iconName, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>

      <Text style={{marginLeft:20, marginTop:12, fontSize:20, color:'#fff', fontWeight:'600'}}>{name}</Text>

      <View style={iconStyle}>
        <Ionicons name={iconName} size={25} color={color} />
        </View>
    </TouchableOpacity>
  )
}
