import React, {Component} from 'react'
import styles from '../styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Location, Permissions } from 'expo'
import TextButton from '../components/TextButton'
import ListItems from '../components/ListItems'
import { getPosts } from '../actions/post'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { updateDescription, updateLocation, uploadPost, uploadLocation } from '../actions/post'
import { FlatList, Modal, SafeAreaView, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, Picker} from 'react-native'
import firebase from 'firebase'
import {pink, white, alertRed} from '../utils/colors'
const GOOGLE_API = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
const GOOGLE_API_KEY = 'AIzaSyC830bvuGb5JC8ZmlDclX8NiAr4SQ_lPRA'

class Locations extends Component {
  state = {
    showModal: false,
    locations: [],
    display:'none',
    lo: '',
    language:'love',
  }

  setLocation = (location) => {
  const place = {
    name: location.name,
    address: location.vicinity,
    coords: {
      lat: location.geometry.location.lat,
      lng: location.geometry.location.lng
    }
  }
  this.setState({ showModal: false })
  this.props.updateLocation(place)
  this.props.uploadLocation()
}

getLocations = async () => {
    this.setState({ showModal: true })
    const permission = await Permissions.askAsync(Permissions.LOCATION)
    if (permission.status === 'granted') {
      console.log(permission)
      const location = await Location.getCurrentPositionAsync()
      console.log(location)
      const url = `${GOOGLE_API}?location=${location.coords.latitude},${location.coords.longitude}&rankby=distance&key=${GOOGLE_API_KEY}`
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ locations: data.results })
      console.log( data )
    }
  }

  navigateMap = () => {
  console.log(this.props.navigation)
  this.props.post.location ?
  this.props.navigation.navigate('Map',
    { location: this.props.post.location}
  )
  : alert('please Choose a location')
}

navigateForm = (form) => {
  this.props.navigation.navigate(form)
  this.setState({showModal:false})
}


  render() {
    const { home, work, campus, custom } = this.props.user.addresses
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/icons/foodECallBG.png')}>
        <SafeAreaView style={{flex:1, marginTop:20}}>

        <Modal animationType='fade' transparent={true} visible={this.state.showModal} onRequestClose={() => this.closeModal()}>
          <SafeAreaView style={[styles.container, {backgroundColor:'rgba(0, 0, 0, 0.5)' }]}>
          <View style={[{backgroundColor:'white', height:'70%', width:'90%', alignSelf:'center', justifyContent:'space-around', borderRadius:12,} ]}>

            <TouchableOpacity style={[styles.row,{paddingLeft:20, height:'17%', backgroundColor:'rgba(0, 0, 0, 0.2)'}]} onPress={() => this.navigateForm('AddrHmForm')}>
            <View style={[styles.iconBg,{marginRight:10, marginLeft:10, alignSelf:'center'} ]}>
              <Ionicons name='ios-home' size={25} color='white' />
              </View>
              <Text style={{fontWeight:'600', fontSize:18, alignSelf:'center', marginLeft:10, color:'#2856AB'}}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.row, {paddingLeft:20, height:'17%', backgroundColor:'rgba(0, 0, 0, 0.1)'}]} onPress={() => this.navigateForm('AddrWkForm')}>
              <View style={[styles.iconBg,{marginRight:10, marginLeft:10, alignSelf:'center'} ]}>
                <Ionicons name='ios-briefcase' size={25} color='white' />
                </View>
                <Text style={{fontWeight:'600', fontSize:18, alignSelf:'center', marginLeft:10, color:'#2856AB'}}>Work</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.row, {paddingLeft:20, height:'17%', backgroundColor:'rgba(0, 0, 0, 0.2)'}]} onPress={() => this.navigateForm('AddrCpForm')}>
                <View style={[styles.iconBg,{marginRight:10, marginLeft:10, alignSelf:'center', color:'#2856AB'} ]}>
                  <Ionicons name='md-business' size={25} color='white' />
                  </View>
                  <Text style={{fontWeight:'600', fontSize:18, alignSelf:'center', marginLeft:10, color:'#2856AB'}}>Campus</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.row, {paddingLeft:20, height:'17%', backgroundColor:'rgba(0, 0, 0, 0.1)'}]} onPress={() => this.navigateForm('AddrCsForm')}>
                  <View style={[styles.iconBg,{marginRight:10, marginLeft:10, alignSelf:'center'} ]}>
                    <Ionicons name='md-locate' size={25} color='white' />
                    </View>
                    <Text style={{fontWeight:'600', fontSize:18, alignSelf:'center', marginLeft:10, color:'#2856AB'}}>Custom</Text>
                    </TouchableOpacity>

                    <TextButton style={[{alignSelf:'center', backgroundColor:alertRed,},styles.btnCancel]} onPress={() => this.setState({showModal:!this.state.showModal})} space={12}>
                      <Text style={{color:white}}>CANCEL</Text>
                    </TextButton>

            </View>
          </SafeAreaView>
        </Modal>

        <View style={[{flex:1},styles.container, styles.centerGroup]}>
          <View style={[styles.row]}>
          <TouchableOpacity  style={styles.row} onPress={() => this.props.navigation.goBack()}>
            <FontAwesome style={{marginRight:'50%'}} name='close' size={40} color={pink} />
            </TouchableOpacity>
            <Text style={styles.title}>Addresses</Text>
          </View>
          <TextButton onPress={() => this.setState({showModal:true})} style={[styles.btnEdit, {alignSelf:'flex-end', marginRight:'8%'}]} space={0}>
            <Text style={{color:'#E23E81'}}>Add</Text>
          </TextButton>

          <View style={[styles.row, styles.listBox, {marginBottom:'10%'}]}>

          <FlatList
            data={[
              {key: 'Current Location', icon:'ios-pin', nav:'Home', display:true, address:`${this.props.post.location ? this.props.post.location.address : 'Please click to select location '}`, edit:true,},
              {key:'Home', icon:'ios-home', nav:'AddrHmForm', display:`${home.address1}` ? true : false, address:`${home.address1} > ${home.address2}, ${home.city}, ${home.state}, ${home.zipCode}`, edit:true},
              {key: 'Work', icon:'ios-briefcase', nav:'AddrWkForm', display:`${work.address1}` ? true : false, address:`${work.address1} > ${work.address2}, ${work.city}, ${work.state}, ${work.zipCode}`, edit:true},
              {key: 'Campus', icon:'md-business', nav:'AddrCpForm', display:`${campus.address1}` ? true : false, address:`${campus.address1} > ${campus.address2}, ${campus.city}, ${campus.state}, ${campus.zipCode}`, edit:true},
              {key: 'Custom', icon:'md-locate', nav:'AddrCsForm',  display:`${custom.address1}` ? true : false, address:`${custom.address1} > ${custom.address2}, ${custom.city}, ${custom.state}, ${custom.zipCode}`,  edit:true },
            ]}

            renderItem={({item}) => (item.display &&
              <ListItems onPress={() => {this.props.navigation.navigate(item.nav) }}
                         iconName={item.icon}
                         txtStyle={[styles.listTxt, {marginRight:10}]}
                         iconStyle={[styles.iconBg,{marginRight:10, marginLeft:10,} ]}
                         iconColor={white}
                         name={item.key}
                         switchBttn={item.switchBttn}
                         address={item.address}
                         edit={item.edit}
                         style={[styles.cartListItem]}
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
  return bindActionCreators({ updateDescription, uploadPost, updateLocation, uploadLocation, getPosts }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    post: state.post,
    user: state.user,

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Locations)
