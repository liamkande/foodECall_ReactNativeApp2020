import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function TextButton ({ children, onPress, style, space }) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text  style={{alignSelf:'center', fontSize:20, fontWeight:'600', marginTop:space}}>{children}</Text>
    </TouchableOpacity>
  )
}


//cleaned
