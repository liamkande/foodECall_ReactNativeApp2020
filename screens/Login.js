import React, {Component} from 'react'
import { Text, View, TextInput, ImageBackground, TouchableOpacity} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser, facebookLogin  } from '../actions/user'
import firebase from 'firebase'
import styles from '../styles'


class Login extends Component {

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.props.getUser(user.uid)
        if(this.props.user != null){
          this.props.navigation.navigate('Home')
        }
      }
    })
  }

  render() {
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/images/SignUpBG.png')}>
      <View style={styles.container}>
        <TextInput
          style={styles.border}
          onChangeText={input => this.props.updateEmail(input)}
          placeholderTextColor='#ffff'
          placeholder='Email'

        />
        <TextInput
          style={styles.border}
          value={this.props.user.password}
          onChangeText={input => this.props.updatePassword(input)}
          placeholderTextColor='#ffff'
          placeholder='Password'
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} title='Login' onPress={() => this.props.login()}>
          <Text style={{color:'#ffff'}}>Login</Text>
        </TouchableOpacity>
        <Text style={{color:'#ffff'}}>OR</Text>
        <TouchableOpacity style={styles.button} title='SignUp' onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={{color:'#ffff'}}>Signup</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword, login, getUser, facebookLogin }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
