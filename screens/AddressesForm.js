import React, {Component} from 'react'
import { Text, View, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateUser, updateAdresses } from '../actions/user'
import styles from '../styles'


class AddressesForm extends Component {
  state = {
    workAddr1: this.props.user.wkAddr1,
    homeAddr2: this.props.user.addresses.home.address2,
    upload: {home:{name:'', address1:'' , address2:'', city:'', state:'', zipCode:'' },
             work:{name:'', address1:'', address2:'', city:'', state:'', zipCode:'' },
             campus:{name:'', address1:'', address2:'', city:'', state:'', zipCode:'' },
             custom:{name:'', address1:'', address2:'', city:'', state:'', zipCode:'' },
            }

  }
  componentWillMount() {
    const { home, work, campus, custom } = this.props.user.addresses
    this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                           work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                           campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                           custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },

                          }})
}
  save = () => {
    let { upload } = this.state
    this.props.updateAdresses(upload)
    this.props.updateUser()
    this.props.navigation.goBack()

  }


  onPress = () => {
  this.props.navigation.goBack()

  }

  render() {
    const { routeName } = this.props.navigation.state
    const { home, work, campus, custom } = this.state.upload

    return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('../assets/icons/foodECallBG.png')}>
        <View style={styles.container}>
        <TouchableOpacity  style={styles.row} onPress={this.onPress}>
          <FontAwesome style={{marginRight:'50%'}} name='close' size={40} color='#E23E81' />
          </TouchableOpacity>
          <TextInput
            style={styles.border}
            value={routeName === 'AddrHmForm' ? home.address1 :
                   routeName === 'AddrWkForm' ? work.address1 :
                   routeName === 'AddrCpForm' ? campus.address1 :
                   routeName === 'AddrCsForm' ? custom.address1 :
                   null }
            onChangeText={input => { routeName === 'AddrHmForm' ?
              this.setState({upload:{home:{name:'', address1:input , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                     work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                     campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                     custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },

                                   }})
                                   : routeName === 'AddrWkForm' ?
                this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                       work:{name:'', address1:input, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                       campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                       custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },
                                   }})
                                   : routeName === 'AddrCpForm' ?
                this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                       work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                       campus:{name:'', address1:input, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                       custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },
                                   }})
                                   : routeName === 'AddrCsForm' ?
                this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                       work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                       campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                       custom:{name:'', address1:input, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },
                                   }})

                                   : null  }}
            placeholderTextColor='#ffff'
            placeholder='Street and number, P.O. box, c/o.'
          />
          <TextInput
            style={styles.border}
            value={routeName === 'AddrHmForm' ? home.address2 :
                   routeName === 'AddrWkForm' ? work.address2 :
                   routeName === 'AddrCpForm' ? campus.address2 :
                   routeName === 'AddrCsForm' ? custom.address2 :
                   null }
            onChangeText={input => { routeName === 'AddrHmForm' ?
              this.setState({upload:{home:{name:'', address1:home.address1 , address2:input, city:home.city, state:home.state, zipCode:home.zipCode },
                                     work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                     campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                     custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },

                                   }})
              : routeName === 'AddrWkForm' ?
                this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                     work:{name:'', address1:work.address1, address2:input, city:work.city, state:work.state, zipCode:work.zipCode },
                                     campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                     custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },

                                   }})
                                   : routeName === 'AddrCpForm' ?
                this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                       work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                       campus:{name:'', address1:campus.address1, address2:input, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                       custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },
                                   }})
                                   : routeName === 'AddrCsForm' ?
                this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                       work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                       campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                       custom:{name:'', address1:custom.address1, address2:input, city:custom.city, state:custom.state, zipCode:custom.zipCode },
                                   }})
                                   : null  }}
            placeholderTextColor='#ffff'
            placeholder='Apartment, Suite, unit, building, floor, etc.'
          />


        <TextInput
          style={styles.border}
          value={routeName === 'AddrHmForm' ? home.city :
                 routeName === 'AddrWkForm' ? work.city :
                 routeName === 'AddrCpForm' ? campus.city :
                 routeName === 'AddrCsForm' ? custom.city :
                 null }
          onChangeText={input => { routeName === 'AddrHmForm' ?
            this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:input, state:home.state, zipCode:home.zipCode },
                                   work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                   campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                   custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },

                                 }})
                                 : routeName === 'AddrWkForm' ?
              this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                   work:{name:'', address1:work.address1, address2:work.address2, city:input, state:work.state, zipCode:work.zipCode },
                                   campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                   custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },

                                 }})
                                 : routeName === 'AddrCpForm' ?
              this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                     work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                     campus:{name:'', address1:campus.address1, address2:campus.address2, city:input, state:campus.state, zipCode:campus.zipCode },
                                     custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },
                                 }})
                                 : routeName === 'AddrCsForm' ?
              this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                     work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                     campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                     custom:{name:'', address1:custom.address1, address2:custom.address2, city:input, state:custom.state, zipCode:custom.zipCode },
                                 }})

                                  : null  }}

          placeholderTextColor='#ffff'
          placeholder='City'
        />
        <TextInput
          style={styles.border}
          value={routeName === 'AddrHmForm' ? home.state :
                 routeName === 'AddrWkForm' ? work.state :
                 routeName === 'AddrCpForm' ? campus.state :
                 routeName === 'AddrCsForm' ? custom.state :
                 null }
          onChangeText={input => { routeName === 'AddrHmForm' ?
            this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:input, zipCode:home.zipCode},
                                   work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode},
                                   campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                   custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },

                                 }})
                                 : routeName === 'AddrWkForm' ?
              this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode},
                                     work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:input, zipCode:work.zipCode},
                                     campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                     custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },

                                 }})
                                 : routeName === 'AddrCpForm' ?
              this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                     work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                     campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:input, zipCode:campus.zipCode },
                                     custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },
                                 }})
                                 : routeName === 'AddrCsForm' ?
              this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                     work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                     campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                     custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:input, zipCode:custom.zipCode },
                                 }})

                                 : null  }}
          placeholderTextColor='#ffff'
          placeholder='State'
        />

        <TextInput
          style={styles.border}
          value={routeName === 'AddrHmForm' ? home.zipCode :
                 routeName === 'AddrWkForm' ? work.zipCode :
                 routeName === 'AddrCpForm' ? campus.zipCode :
                 routeName === 'AddrCsForm' ? custom.zipCode :
                 null }
          onChangeText={input => { routeName === 'AddrHmForm' ?
            this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:input},
                                   work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode},
                                   campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                   custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },

                                 }})
                                 : routeName === 'AddrWkForm' ?
              this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode},
                                   work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:input},
                                   campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                   custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },
                               }})
                               : routeName === 'AddrCpForm' ?
            this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                   work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                   campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:input },
                                   custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:custom.zipCode },
                               }})
                               : routeName === 'AddrCsForm' ?
            this.setState({upload:{home:{name:'', address1:home.address1 , address2:home.address2, city:home.city, state:home.state, zipCode:home.zipCode },
                                   work:{name:'', address1:work.address1, address2:work.address2, city:work.city, state:work.state, zipCode:work.zipCode },
                                   campus:{name:'', address1:campus.address1, address2:campus.address2, city:campus.city, state:campus.state, zipCode:campus.zipCode },
                                   custom:{name:'', address1:custom.address1, address2:custom.address2, city:custom.city, state:custom.state, zipCode:input },
                               }})
                               : null  }}
          placeholderTextColor='#ffff'
          placeholder='Zip Code'
        />

        <TouchableOpacity style={styles.button} title='SignUp' onPress={this.save}>
          <Text style={{color:'#ffff'}}>SAVE</Text>
        </TouchableOpacity>


      </View>
      </ImageBackground>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return ( bindActionCreators({ updateUser, updateAdresses }, dispatch)
)
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressesForm)
