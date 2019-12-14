import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const ClosedTag = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.txt}>Closed</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    alignSelf:'flex-end',
    backgroundColor:'#FF4F6B',
    borderRadius:5,

  },
  txt: {
    fontWeight:'bold',
    fontSize:16,
    margin:5,
    color: '#F8F7F8'
  }
})

export default ClosedTag
