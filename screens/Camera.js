import React from 'react'
import styles from '../styles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uploadPhoto } from '../actions/index'
import { updatePhoto, uploadPost } from '../actions/post'
import { updateUser } from '../actions/user'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as Permissions from 'expo-permissions'
import * as ImageManipulator from 'expo-image-manipulator'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera'

class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  }

  snapPhoto = async () => {
  const { status } = await Permissions.askAsync(Permissions.CAMERA)
  if (status === 'granted') {
    const image = await this.camera.takePictureAsync()
    if(!image.cancelled ){
      const resize = await ImageManipulator.manipulateAsync(image.uri, [], { format: 'jpeg', compress: 0.1 })
      const url = await this.props.dispatch(uploadPhoto(resize))
      this.props.dispatch(updatePhoto(url))
      alert('Thank You, your new picture has been saved')
      url ? this.props.navigation.goBack() : null
      this.props.dispatch(updateUser())
    }
  }
}


  openLibrary = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status === 'granted') {
      const image = await ImagePicker.launchImageLibraryAsync()
      if(!image.cancelled ){
        const url = await this.props.dispatch(uploadPhoto(image))
        this.props.dispatch(updatePhoto(url))
        alert('Thank You, your new picture has been saved')
        url ? this.props.navigation.goBack() : null
        this.props.dispatch(updateUser())
      }
    }
  }


  render() {
      return (
      <Camera style={{flex:1}} ref={ref => { this.camera = ref }} type={this.state.type}>
        <SafeAreaView style={{flex:1, marginTop:20}}>
          <TouchableOpacity style={{ paddingLeft: 30 }} onPress={() => this.props.navigation.goBack()} >
            <Ionicons color={'white'} name={'ios-arrow-back'} size={50}/>
          </TouchableOpacity>
        </SafeAreaView>
        <TouchableOpacity style={{ paddingLeft: 200 }} onPress={this.openLibrary}>
          <Text style={styles.subtitle}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingLeft: 30 }} onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }} >
          <Ionicons color={'white'} name={'ios-reverse-camera'} size={50}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraButton} onPress={() => this.snapPhoto()} />
      </Camera>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ uploadPhoto, updatePhoto, uploadPost }, dispatch)
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(CameraExample)



// Add the hasPermission if and else conditions if applicable!
