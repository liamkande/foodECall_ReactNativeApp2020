import React from 'react'
import { Text,View, TouchableOpacity, Switch} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ListItems ({ name, iconStyle, onPress, style, space, spaceRigth, iconName, iconColor, txtStyle, address, edit, switchBttn, fullName, expDate }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
    <View style={iconStyle}>
      <Text style={txtStyle}>{name}</Text>
      </View>
      {edit ?
        <TouchableOpacity onPress={onPress} style={{marginTop:14, marginRight:15}}>
          <Ionicons name='md-create' size={20} color='white' />
       </TouchableOpacity>
       :
       null
     }
      </View>
        <View style={{flex:2,marginTop:10, width:180, marginLeft:17}}>
        <Text  style={{flexDirection:'row', color:'white', fontSize:16, fontWeight:'bold', alignSelf:'center' }}>{fullName}</Text>
        <Text style={{flexDirection:'row', color:'white', fontSize:16, marginTop:4, alignSelf:'center'}}>{expDate}</Text>
        </View>
    </TouchableOpacity>
  )
}
