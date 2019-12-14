import React from 'react'
import { TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'


function IconBtn({onPress, style, iconStyle, name, size}) {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      >
      <Ionicons
        style={iconStyle}
        name={name}
        size={size}
        />
    </TouchableOpacity>
  )
}

export default withNavigation(IconBtn)


//cleaned
