import React, {Component} from 'react';
import styles from '../styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'
import TextButton from '../components/TextButton'
import CartItem from '../components/CartItem'
import { getPosts } from '../actions/post'
import { Ionicons } from '@expo/vector-icons'
import { updateDescription, updateLocation, uploadPost, uploadLocation } from '../actions/post'
import { FlatList, Modal, SafeAreaView, Text, View, TextInput, Image, TouchableOpacity, ImageBackground } from 'react-native'
import firebase from 'firebase'
const GOOGLE_API = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
const GOOGLE_API_KEY = 'AIzaSyC830bvuGb5JC8ZmlDclX8NiAr4SQ_lPRA'

class Home extends Component {
  componentDidMount() {
  this.props.getPosts()
}
  state = {
    showModal: false,
    locations: [],
  }

  logout = () => {
    firebase.auth().signOut()
    this.props.navigation.navigate('Main')
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


  render() {
    return (
      <ImageBackground style={{width: '100%', height: '100%'}}source={{uri:'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/Food-E-Call_BG-web%402x.png?alt=media&token=dd571cd3-f8fa-4fd7-938d-22af69cf23d6'}}>
      <View style={styles.signInBox}>
      <Modal animationType='slide' transparent={false} visible={this.state.showModal}>
        <SafeAreaView style={[styles.container, styles.center]}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={this.state.locations}
            renderItem={({ item }) => (
            <TouchableOpacity style={styles.border} onPress={() => this.setLocation(item)}>
              <Text style={{color:'#E23E81'}}>{item.name}</Text>
              <Text style={styles.gray}>{item.vicinity}</Text>
            </TouchableOpacity>
          )}/>
        </SafeAreaView>
      </Modal>

      <TouchableOpacity style={styles.border} onPress={this.getLocations}>
        <Text style={{color:'#E23E81', fontSize: 30}}>{this.props.post.location ? this.props.post.location.name : 'Add a Location'}</Text>
      </TouchableOpacity>
          <View style={styles.btn}>
          <TextButton onPress={() => this.navigateMap()} style={styles.btnLogin} space={12}>
            <Text style={{color:'red'}}>See Location</Text>
          </TextButton>
          </View>
        <View style={styles.btn}>
        <TextButton onPress={this.logout} style={styles.btnLogin} space={12}>
          <Text style={{color:'#E23E81'}}>LOGOUT</Text>
        </TextButton>
          <TouchableOpacity style={styles.cartBox}>
          <Text style={{color:'#E23E81', fontSize: 30}}>{this.props.post.location ? this.props.post.location.name : 'Waiting on info'}</Text>
          <Text style={{color:'#E23E81', fontSize: 30}}>{this.props.post.location ? this.props.post.location.address : 'Waiting on info'}</Text>
          <TouchableOpacity style={styles.iconBg} onPress={() => this.props.navigation.openDrawer()}>
            <Ionicons name='ios-heart' size={25} color='white' />
            </TouchableOpacity>
            </TouchableOpacity>
        </View>
        <View style={{marginBottom:40}}/>
      </View>
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
    user: state.user
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
