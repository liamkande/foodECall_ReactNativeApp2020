import React from 'react'
import { TouchableHighlight, StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


export default function MenuButton ({ onPress, iconName, title }) {
  return (
    <TouchableHighlight onPress={onPress}
      style={styles.btnClickContain} underlayColor="rgba(128, 128, 128, 0.1)">
      <View style={styles.btnContainer}>
        <Ionicons name={iconName} size={25} color='black' />
      </View>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontFamily: 'FallingSkyCond',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 2,
  }
})
