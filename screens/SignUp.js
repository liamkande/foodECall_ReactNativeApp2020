import React, {Component} from 'react'
import { Text, View, ScrollView, TextInput, ImageBackground, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateCity, updateState, updateFirstNm, updateLastNm, updatePhone, signup, updateUser} from '../actions/user'
import styles from '../styles'


class SignUp extends Component {

  signup = () => {
    this.props.signup()
    this.props.navigation.navigate('Home')
  }
  onPress = () => {
    const { routeName } = this.props.navigation.state
    if(routeName === 'Signup'){
      this.props.signup()
      this.props.navigation.navigate('Home')
    } else {
      this.props.updateUser()
      this.props.navigation.goBack()
    }
  }

  render() {
    const { routeName } = this.props.navigation.state
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/images/SignUpBgrd.png')}>
      <KeyboardAvoidingView behavior="padding" enabled>
      <ScrollView style={{marginTop:'20%'}}>
        <View style={[styles.container, {alignSelf:'center', width:'100%'}]}>
        { routeName === 'Edit' &&
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')} >
          <Image style={styles.roundImage} source={{uri: !this.props.user.photo ? 'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/Asset%201.jpg?alt=media&token=5c14befd-83cc-4aaa-9ac1-896d5908e50c' : this.props.user.photo}}/>
          <Text style={styles.subtitle}>Upload Photo</Text>
        </TouchableOpacity>
        }
        <TextInput
          style={styles.border}
          editable={routeName === 'SignUp' ? true : false}
          value={this.props.user.firstNm}
          onChangeText={input => this.props.updateFirstNm(input)}
          placeholderTextColor='#ffff'
          placeholder='First Name'
        />
        <TextInput
          style={styles.border}
          editable={routeName === 'SignUp' ? true : false}
          value={this.props.user.lastNm}
          onChangeText={input => this.props.updateLastNm(input)}
          placeholderTextColor='#ffff'
          placeholder='Last Name'
        />
        <TextInput
          style={styles.border}
          editable={routeName === 'SignUp' ? true : false}
          value={this.props.user.email}
          onChangeText={input => this.props.updateEmail(input)}
          placeholderTextColor='#ffff'
          placeholder='Email'
        />
        <TextInput
          style={styles.border}
          value={this.props.user.phone}
          onChangeText={input => this.props.updatePhone(input)}
          placeholderTextColor='#ffff'
          placeholder='Mobile'
        />
        <TextInput
          style={[styles.border, {marginBottom:50}]}
          editable={routeName === 'SignUp' ? true : false}
          value={this.props.user.password}
          onChangeText={input => this.props.updatePassword(input)}
          placeholderTextColor='#ffff'
          placeholder='Password'
          secureTextEntry={true}
        />

        {routeName === 'SignUp' &&
        <TouchableOpacity style={[styles.button, {marginBottom:50}]} title='SignUp' onPress={this.signup}>
          <Text style={{color:'#ffff', fontSize:18, fontWeight:'bold'}}>DONE</Text>
        </TouchableOpacity>
        }
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ( bindActionCreators({ updateEmail, updatePassword, updateCity, updateState, updateFirstNm, updateLastNm, updatePhone, signup, updateUser }, dispatch)
)
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
