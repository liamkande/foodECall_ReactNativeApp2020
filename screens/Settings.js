import React, {Component} from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Text, View, Button, Image, ImageBackground, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import ListItems from '../components/ListItems'
import styles from '../styles'
import {pink, white} from '../utils/colors'

export default class Settings extends Component {

  render() {
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/icons/foodECallBG.png')}>
        <SafeAreaView style={{flex:1, marginTop:20}}>
        <View style={[{flex:2},styles.container, styles.center]}>
          <View style={[styles.row]}>
          <TouchableOpacity  style={styles.row} onPress={() => this.props.navigation.goBack()}>
            <FontAwesome style={{marginRight:'50%'}} name='close' size={40} color={pink} />
            </TouchableOpacity>
            <Text style={styles.title}>Settings</Text>
          </View>

          <View style={[styles.row, styles.listBox, {marginBottom:'20%'}]}>
          <FlatList
          style={{marginTop:'5%'}}
            data={[
            {key: 'Change Password', icon:'md-key', nav:'Home', spaceRigth:'19%'},
            {key: 'Notifications', icon:'ios-notifications', nav:'ShopCart', switchBttn:true},
            {key: 'Rate our App', icon:'ios-star', nav:'Home', spaceRigth:'30%'},
            {key: 'Privacy', icon:'ios-paper', nav:'Home', spaceRigth:'40%'},
            {key: 'Payment', icon:'ios-card', nav:'Payments', spaceRigth:'35%'},
            {key: 'Remove Account', icon:'ios-trash', nav:'Home', spaceRigth:'20%'},
          ]}

            renderItem={({item}) => (
              <ListItems  onPress={() => this.props.navigation.navigate(item.nav)}
                         iconName={item.icon}
                         txtStyle={[styles.listTxt,]}
                         iconStyle={[styles.iconBg,{marginRight:15, marginLeft:15} ]}
                         iconColor={white}
                         name={item.key}
                         switchBttn={item.switchBttn}
                         spaceRigth={item.spaceRigth}
                         style={[styles.listItem, styles.row, {justifyContent:'space-between'}]}
              />
            )}
          />
          </View>
        </View>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}
