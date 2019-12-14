import React, {Component} from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Text, View, Button, Image, ImageBackground, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import ListItems from '../components/ListItems'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { uploadPost, uploadPhoto, updatePhoto, getPosts} from '../actions/post'
import { updateUser } from '../actions/user'
import styles from '../styles'
import {pink, white} from '../utils/colors'

class Account extends Component {
  componentDidMount() {
  this.props.getPosts()
}
  post = () => {
    this.props.navigation.goBack()
  }

  render() {
    if(this.props.post === null) return null
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={{uri:`${this.props.post.mainBgImg}`}}>
        <SafeAreaView style={{flex:1}}>
        <View style={[styles.container, styles.center]}>
          <View style={styles.row}>
          <TouchableOpacity  style={styles.row} onPress={() => this.props.navigation.goBack()}>
            <FontAwesome style={{marginRight:'50%'}} name='close' size={40} color={pink} />
            </TouchableOpacity>
            <Text style={styles.title}>Account</Text>
          </View>
          <View style={[styles.row, {alignSelf:'flex-start', marginLeft:'10%' }]}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')}>
            <Image style={[styles.roundImage, styles.avatar]}
                   source={{uri: !this.props.user.photo ? 'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/Asset%201.jpg?alt=media&token=5c14befd-83cc-4aaa-9ac1-896d5908e50c' : this.props.user.photo}} />
              </TouchableOpacity>
            <View>
            <Text style={[styles.subtitle, {marginBottom:8}]}>{this.props.user.username}</Text>
            <Text style={[styles.normalTxt, {marginBottom:8}]}>{this.props.user.phone}</Text>
            <TouchableOpacity  style={[styles.row, styles.btnEdit]} onPress={this.post}>
              <Text style={{fontSize:16, alignSelf:'center', color:white, fontWeight:'600', paddingLeft:'30%'}}>Edit</Text>
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.listBox}>
          <FlatList
            style={{paddingTop:'8%'}}
            data={[
            {key: 'Location', icon:'ios-pin', nav:'Home'},
            {key: 'Payment', icon:'ios-card', nav:'ShopCart'},
            {key: 'Help', icon:'ios-help-buoy', nav:'Home'},
            {key: 'Settings', icon:'md-settings', nav:'Home'},
            {key: 'Drive For Food-E-Call', icon:'ios-car', nav:'Home'},
          ]}
            renderItem={({item}) => (
              <ListItems  onPress={() => this.props.navigation.navigate(item.nav)}
                         iconName={item.icon}
                         txtStyle={styles.listTxt}
                         iconStyle={styles.iconBg}
                         color={white}
                         name={item.key}
                         style={[styles.listItem, styles.row]}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ uploadPost, getPosts, updateUser }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
