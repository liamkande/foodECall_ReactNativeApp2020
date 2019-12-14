import React from 'react'
import { Text,View, TouchableOpacity, Switch } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function DrawerItems ({ name, iconStyle, onPress, style, space, iconName, iconColor, txtStyle, switchBttn, spaceRigth }) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
    <View style={iconStyle}>
      <Ionicons name={iconName} size={25} color={iconColor} />
      </View>
      <Text style={txtStyle}>{name}</Text>
    </TouchableOpacity>
  )
}
