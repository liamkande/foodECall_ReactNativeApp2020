import React, {Component} from 'react'
import { Text, View, SafeAreaView, Button, Image, ImageBackground } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser, facebookLogin  } from '../actions/user'


import { FontAwesome } from '@expo/vector-icons'
import TextButton from '../components/TextButton'
import firebase from 'firebase'
import styles from '../styles'

class Main extends Component {
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

  register = () => {
    const key = Date.now()
    this.props.navigation.navigate('SignUp')
  }
  login = () => {
    const key = Date.now()
    this.props.navigation.navigate('Login')
  }
  google = () => {
    const key = Date.now()
    alert('Yay... Google Works!')
    //Update Redux

    // Route to home

    //Update 'DB'
  }

  render() {
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/Food-E-Call_BG-web%402x.png?alt=media&token=dd571cd3-f8fa-4fd7-938d-22af69cf23d6'}}>
      <View style={styles.signInBox}>
      <SafeAreaView style={[styles.container, styles.center]}>
        <Image style={styles.img} source={{uri:'https://firebasestorage.googleapis.com/v0/b/food-e-call-website.appspot.com/o/logo%404x.png?alt=media&token=a3343777-ca30-45a4-91e8-d58acfd44e4d'}} />
        <Text style={styles.txt}>The food delivery app, designed</Text>
        <Text style={styles.txt}>with you in mind<FontAwesome
          name='heart'
          color='#E23E81'
          size={12}
        /></Text>
        <View style={{marginTop:100}}/>
        <View  style={styles.btn}>
        <TextButton onPress={this.register} style={styles.btnRegister} space={12}>
          <Text style={{color:'white'}}>REGISTER</Text>
        </TextButton>
        </View>
        <View  style={styles.btn}>
        <TextButton onPress={this.login} style={styles.btnLogin} space={12}>
          <Text style={{color:'#E23E81'}}>LOGIN</Text>
        </TextButton>
        </View>

        <View  style={styles.btn}>
        <TextButton onPress={() => this.props.facebookLogin()} style={styles.btnGoogle} space={6}>
        <Text><FontAwesome
          name='google'
          color='black'
          size={30}
        />  Sign In Facebook</Text>
        </TextButton>
        </View>
        <View style={{marginBottom:40}}/>
          </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)
