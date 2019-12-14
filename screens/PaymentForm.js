import React, {Component} from 'react'
import {View, Text, ImageBackground, SafeAreaView, TouchableOpacity, Modal, TextInput, FlatList} from 'react-native'
import PaymentItems from '../components/PaymentItems'
import {Ionicons } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateUser, updatePayments } from '../actions/user'
import {pink, white, alertRed, lighGrey, black} from '../utils/colors'
import styles from '../styles'
import TextButton from '../components/TextButton'
import uuid from 'uuid'

class PaymentsForm extends Component {
   state = {
     showModal: true,
     cards:[],
     upload: {  card1:{type:'', number:'', zipCode:'', exp:'', name:'', cvc:'', main:''},
                card2:{type:'', number:'', zipCode:'', exp:'', name:'', cvc:''},
                card3:{type:'', number:'', zipCode:'', exp:'', name:'', cvc:''},
                card4:{type:'', number:'', zipCode:'', exp:'', name:'', cvc:''},
                card5:{type:'', number:'', zipCode:'', exp:'', name:'', cvc:''},
             },

   }

   componentWillMount() {

     this.setState({cards:[ {type:'', number:'', zipCode:'0omjj', exp:'', name:'', cvc:'', main:''},
                            {type:'', number:'', zipCode:'', exp:'', name:'', cvc:''},

                           ]})
 }

 save = () => {
   const card1 = this.props.user.payments[0]
   const card2 = {type:'love', number:'', zipCode:'0omjj', exp:'', name:'', cvc:'', main:''}

   if (this.props.user.payments.length < 5 ) {
     this.props.user.payments.push(card1 ? {type:'', number:'', zipCode:'0omjj', exp:'', name:'', cvc:'', main:''} : card2)
     this.props.updateUser()
     this.setState({showModal:!this.state.showModal})
     this.props.navigation.goBack()
   } else {
     this.setState({showModal:!this.state.showModal})
     this.props.navigation.goBack()
     alert('Sorry')
   }


 }

   cancel = () => {
     this.setState({showModal:!this.state.showModal})
     this.props.navigation.goBack()
   }


  render() {
    const { routeName } = this.props.navigation.state
    const { card1, card2, card3, card4, card5 } = this.state.upload
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/icons/foodECallBG.png')}>
          <SafeAreaView style={{flex:1, marginTop:20}}>
          <Modal animationType='fade' transparent={true} visible={this.state.showModal} onRequestClose={() => this.closeModal()}>
            <SafeAreaView style={[styles.container, {backgroundColor:'rgba(0, 0, 0, 0.5)' }]}>
            <View style={[{backgroundColor:'white', height:'75%', width:'90%', alignSelf:'center', justifyContent:'space-around', marginBottom:'10%', borderRadius:12,} ]}>

              <View style={[{backgroundColor:'#2F496C', height:'25%', width:'88%', borderRadius:12, alignSelf:'center', marginTop:25} ]}>
              <TextInput
                style={styles.border}
                editable={routeName === 'SignUp' ? true : false}
                value='love'
                onChangeText={input => this.props.updateFirstNm(input)}
                placeholderTextColor='#ffff'
                placeholder='First Name'
              />
              </View>
              <View style={[{backgroundColor:'#2F496C', height:'25%', width:'88%', borderRadius:12, alignSelf:'center', marginTop:25} ]}>
              <TextInput
                style={styles.border}
                editable={routeName === 'SignUp' ? true : false}
                value='ok'
                onChangeText={input => this.props.updateFirstNm(input)}
                placeholderTextColor='#ffff'
                placeholder='First Name'
              />
              </View>

                      <TextButton style={[{alignSelf:'center', backgroundColor:lighGrey},styles.btnCancel]} onPress={this.save} space={12}>
                        <Text style={{color:black}}>SAVE</Text>
                      </TextButton>

                      <TextButton style={[{alignSelf:'center', backgroundColor:alertRed},styles.btnCancel]} onPress={this.cancel} space={12}>
                        <Text style={{color:white}}>REMOVE</Text>
                      </TextButton>


              </View>
            </SafeAreaView>
          </Modal>


          <View style={[{flex:1},styles.container, styles.centerGroup]}>
            <View style={[styles.row]}>
              <TouchableOpacity  style={styles.row} onPress={() => this.props.navigation.goBack()}>
                <Ionicons style={{marginRight:'50%'}} name='md-arrow-round-back' size={50} color={pink} />
              </TouchableOpacity>
              <Text style={[styles.title, {paddingTop:10}]}>Payments</Text>
            </View>

            <View style={[styles.row, styles.listBox, {marginBottom:'10%'}]}>

            </View>
          </View>
          </SafeAreaView>
      </ImageBackground>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ( bindActionCreators({ updateUser, updatePayments }, dispatch)
)
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsForm)
