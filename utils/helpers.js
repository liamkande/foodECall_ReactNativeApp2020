import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { blue, pink, black } from './colors'

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:10,
    marginLeft:10
  },
})


export function getNavBarIcons (info) {
  const icon = {
    home: {
      getIcon() {
        return (
          <View style={styles.iconContainer}>
            <FontAwesome
              name='home'
              color={blue}
              size={35}
            />
          </View>
        )
      }
    },

    list: {
      getIcon() {
        return (
          <View style={styles.iconContainer}>
            <FontAwesome
              name='wpforms'
              color={black}
              size={35}
            />
          </View>
        )
      }
    },

    basket: {
      getIcon() {
        return (
          <View style={styles.iconContainer}>
            <FontAwesome
              name='shopping-basket'
              color={pink}
              size={35}
            />
          </View>
        )
      }
    },
  }
    return typeof info === 'undefined'
  ? icon
  : icon[info]
}
