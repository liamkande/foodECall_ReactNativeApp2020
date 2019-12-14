import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {pink, black} from '../utils/colors'

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={35}
      color={props.focused ? pink : black}
    />
  )
}

//cleaned
