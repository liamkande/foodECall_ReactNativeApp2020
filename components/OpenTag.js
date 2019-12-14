import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const OpenTag = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.txt}>Open</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    alignSelf:'flex-end',
    backgroundColor:'#9FEAB3',
    borderRadius:5,

  },
  txt: {
    fontWeight:'bold',
    fontSize:16,
    margin:5,
  }
})

export default OpenTag
