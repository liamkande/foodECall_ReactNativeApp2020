import React from 'react'
import firebase from 'firebase'
import { StyleSheet, View, TouchableOpacity, Text, Image, Button, SafeAreaView, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uploadPhoto } from '../actions/index'
import { updatePhoto, updateEmail, updatePassword, updateUsername, updateBio, signup, updateUser } from '../actions/user'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera'
import MenuButton from '../components/MenuButton'
import DrawerItems from '../components/DrawerItems'
import TextButton from '../components/TextButton'



class DrawerContainer extends React.Component {

  logout = () => {
    firebase.auth().signOut()
    this.props.navigation.navigate('Main')
  }

  openLibrary = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  if (status === 'granted') {
    const image = await ImagePicker.launchImageLibraryAsync()
    if(!image.cancelled ){
      const url = await this.props.dispatch(uploadPhoto(image))
      this.props.dispatch(updatePhoto(url))
      this.props.dispatch(updateUser())
    }
  }
}

  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={{flex:1, marginTop:20}}>
      <View style={styles.content}>
        <View style={styles.container}>
        <View style={{flexDirection: 'row', marginBottom:'5%', marginTop:'2%'}}>
          <Image style={styles.roundImage} source={{uri: !this.props.user.photo ? 'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/appLogo.png?alt=media&token=05d7f946-dbf7-46fd-909c-9cc4adbfb330' : this.props.user.photo }}/>
          <View style={styles.top}>
            <Text style={{fontSize:18, fontWeight:'600', marginBottom:2,}}>{this.props.user.username}</Text>
            <Button title='Edit Profile' onPress={() => navigation.navigate('Edit')}/>
          </View>
        </View>

          <View style={{ flex:2, justifyContent:'space-between', alignSelf:'center', marginRight:5}}>
          {this.props.items.map((data) => {
            return (
              <DrawerItems  key={data.title}
                            onPress={() => navigation.navigate(data.nav)}
                            iconName={data.icon}
                            iconStyle={styles.iconBg}
                            txtStyle={styles.txtStyle}
                            iconColor='white'
                            name={data.title}
                            style={[styles.row,]}
              />
            )
          })
      }
            <TextButton onPress={this.logout} style={[{alignSelf:'center'},styles.btnLogin]} space={3}>
              <Text style={{color:'#E23E81'}}>LOGOUT</Text>
            </TextButton>
        </View>
      </View>
      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  btnEdit: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:80,
    height:30,
    borderRadius:12,
    alignSelf:'center',
    fontSize:14,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft:10
  },
  top: {
    flex: 1,
    marginTop: 15,
    marginLeft:-20,
    alignItems: 'center'
  },
  roundImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  iconBg: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    width: 40,
    height: 40,
    backgroundColor: '#E23E81',
    margin: 5
  },
  txtStyle: {
    marginLeft:5,
    fontSize:18,
    fontWeight:'600',
    alignSelf:'center',
    color: '#2856AB',

  },
  btnLogin: {
    backgroundColor: '#2856AB',
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 3,
      width: 6
    },
    width:100,
    height:30,
    borderRadius:25,
    marginBottom: 20,

  },
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updatePhoto, uploadPhoto, updateUser, updateEmail, updatePassword, updateUsername, updateBio, signup }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    items:[
    {title: 'Settings', icon:'ios-settings', nav:'Settings'},
    {title: 'Payments', icon:'md-infinite', nav:'AddSubscription'},
    {title: 'About Us', icon:'md-infinite', nav:'AboutUs'},
    {title: 'Addresses', icon:'ios-journal', nav:'Addresses'},
    {title: 'Drive For Food-E-Call', icon:'ios-car', nav:'Account'},
    //{title: 'Privacy', icon:'ios-paper', nav:'Account'},
    {title: 'My Favorites', icon:'ios-heart', nav:'Account'},
    {title: 'Promotions', icon:'md-pricetag', nav:'Account'},
    {title: 'Help', icon:'ios-help-buoy', nav:'Account'},
    //{title: 'Payment', icon:'ios-card', nav:''},

  ]
  }
}

export default connect(mapStateToProps)(DrawerContainer)
