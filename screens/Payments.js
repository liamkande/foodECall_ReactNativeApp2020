import React, {Component} from 'react'
import {View, Text, ImageBackground, SafeAreaView, Modal, TextInput, TouchableOpacity, FlatList} from 'react-native'
import PaymentItems from '../components/PaymentItems'
import {Ionicons } from '@expo/vector-icons'
import {pink, white, alertRed, lighGrey, black} from '../utils/colors'
import styles from '../styles'
import TextButton from '../components/TextButton'

 export default class Payments extends Component {
   state = {
     showModal: false,
     firstNm:'Liam',
     card:''

   }


  render() {
    const { routeName } = this.props.navigation.state
    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/images/foodECallBG.png')}>
          <SafeAreaView style={{flex:1, marginTop:20}}>


                  <Modal animationType='fade' transparent={true} visible={this.state.showModal} onRequestClose={() => this.closeModal()}>
                    <SafeAreaView style={[styles.container, {backgroundColor:'rgba(0, 0, 0, 0.5)' }]}>
                    <View style={[{backgroundColor:'white', height:'75%', width:'90%', alignSelf:'center', justifyContent:'space-around', borderRadius:12,} ]}>

                      <View style={[{backgroundColor:'#2F496C', height:'25%', width:'88%', borderRadius:12, alignSelf:'center', marginTop:25} ]}>
                      <TextInput
                        style={styles.border}
                        editable={true}
                        value={this.state.card === 'card1' ? 'Card 1'
                                :
                                this.state.card === 'card2' ? 'Card 2'
                                :
                                this.state.card === 'card3' ? 'Card 3'
                                :
                                this.state.card === 'card4' ? 'Card 4'
                                :
                                this.state.card === 'card5' ? 'Card 5'
                                :
                                this.state.card === 'new' ? ''
                                :
                                this.state.card === 'max' ? alert("You've exceeded the number of cards you cn save, please remove a card to add a new one")
                                : null


                      }
                        onChangeText={input => this.props.updateFirstNm(input)}
                        placeholderTextColor='#ffff'
                        placeholder='First Name'
                      />
                      </View>
                      <View style={[{backgroundColor:'#2F496C', height:'25%', width:'88%', borderRadius:12, alignSelf:'center', marginTop:25} ]}>
                      <TextInput
                        style={styles.border}
                        editable={routeName === 'SignUp' ? true : false}
                        value={this.state.firstNm}
                        onChangeText={input => this.props.updateFirstNm(input)}
                        placeholderTextColor='#ffff'
                        placeholder='First Name'
                      />
                      </View>

                              <TextButton style={[{alignSelf:'center', backgroundColor:lighGrey},styles.btnCancel]} onPress={() => this.setState({showModal:!this.state.showModal})} space={12}>
                                <Text style={{color:black}}>SAVE</Text>
                              </TextButton>

                              {this.state.card === 'new' ?
                              <TextButton style={[{alignSelf:'center', backgroundColor:alertRed},styles.btnCancel]} onPress={() => this.setState({showModal:!this.state.showModal})} space={12}>
                                <Text style={{color:white}}>CANCEL</Text>
                              </TextButton>
                              :
                              <TextButton style={[{alignSelf:'center', backgroundColor:alertRed},styles.btnCancel]} onPress={() => this.setState({showModal:!this.state.showModal})} space={12}>
                                <Text style={{color:white}}>REMOVE</Text>
                              </TextButton>

                            }







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
              <TextButton onPress={() => this.setState({card:'new', showModal:true,})} style={[styles.btnEdit, {alignSelf:'flex-end', marginRight:'8%'}]} space={0}>
                <Text style={{color:pink}}>Add New</Text>
              </TextButton>
              <TextButton onPress={() => this.props.navigation.navigate('PaymentsForm')} style={[styles.btnEdit, {alignSelf:'flex-end', marginRight:'8%'}]} space={0}>
                <Text style={{color:pink}}>Test New</Text>
              </TextButton>
              <View style={[styles.row, styles.listBox, {marginBottom:'10%'}]}>
              <FlatList
                data={[
                {key: 'Visa****8061', icon:'md-key', nav:'PaymentsForm', edit:true, bgColor:'#2568B3', fullName:'Marcus Hawker', expDate:'Expires 04/2030', card:'card1'},
                {key: 'AMEX****8061', icon:'ios-notifications', nav:'ShopCart', edit:true, bgColor:'#47A6DF', fullName:'Ansoumane Kande Kadher ', expDate:'Expires 04/2030', card:'card2'},
                {key: 'MasterCard****8061', icon:'ios-star', nav:'Home', edit:true, bgColor:'#EA9836', fullName:'Marcus Hawker', expDate:'Expires 04/2030', card:'card3'},
                {key: 'Discover****8061', icon:'ios-paper', nav:'Home', edit:true, bgColor:'#ED5D2A', fullName:'Ansoumane Kande', expDate:'Expires 04/2030', card:'card4'},
              ]}

                renderItem={({item}) => (
                  <PaymentItems onPress={() => this.props.navigation.navigate('AddSubscription')}
                             iconName={item.icon}
                             txtStyle={[styles.subtitle]}
                             iconStyle={[styles.cardsIconBg,{marginRight:10, marginLeft:17,backgroundColor:item.bgColor} ]}
                             iconColor={white}
                             name={item.key}
                             fullName={item.fullName}
                             expDate={item.expDate}
                             switchBttn={item.switchBttn}
                             address={item.address}
                             edit={item.edit}
                             style={[styles.paymentItem]}
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
