import React from 'react'
import { Text,View, TouchableOpacity, Switch} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ListItems ({ name, iconStyle, onPress, style, space, spaceRigth, iconName, iconColor, txtStyle, address, edit, switchBttn }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
    <View style={iconStyle}>
      <Ionicons name={iconName} size={25} color={iconColor} />
      </View>
      <Text style={[txtStyle, spaceRigth ? {marginRight:spaceRigth} : null]}>{name}</Text>
      {edit ?
        <TouchableOpacity onPress={onPress} style={{marginTop:14, marginRight:15}}>
          <Ionicons name='md-create' size={20} color='white' />
       </TouchableOpacity>
       :
       null
     }
     {switchBttn ?
       <View style={{marginTop:8.5}}>
         <Switch
          onValueChange = {true}
          value = {true}/>
      </View>
      :
      null
      }
      </View>
      {address ?
        <Text style={{flex:2, alignSelf:'center', color:'white', marginTop:10}}>{address}</Text>
        :
        null
       }

    </TouchableOpacity>
  )
}

//cleaned but needs betterWay to handle spaceRigth... May need to be refactored!
