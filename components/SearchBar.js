import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Ionicons
        style={styles.iconStyle}
        name='ios-search'
        size={25}
        />
      <View style={styles.textInput}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop:10,
    flexDirection:'row',
    alignSelf: 'center',
    alignItems:'center',
    backgroundColor:'#F0EEEE',
    height: 50,
    width:'80%',
    borderRadius: 25,
    borderWidth:3,
    borderColor: '#F19D39',
    marginHorizontal: 15,
    marginBottom:10
  },
  iconStyle: {
    marginLeft:10,
    marginRight:10,
  },
})

export default SearchBar
