import React, {Component} from 'react'
import { Text,View, TouchableOpacity, Modal, TouchableHighlight, SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class CartItem extends Component {

  state = {
       showModal: false,
   }

  render() {
      return (
        <View>
        <Modal animationType="slide"
               transparent={false}
               visible={this.state.showModal}
            >
              <SafeAreaView style={{flex:1}}>
                  <View>
                    <Text>Hello World!</Text>

                    <TouchableHighlight
                      onPress={() => {
                        this.setState({ showModal: false })
                      }}>
                      <Text>Hide Modal</Text>
                    </TouchableHighlight>
                  </View>
                </SafeAreaView>
              </Modal>

        <TouchableOpacity onPress={() => this.setState({ showModal: true })} >
          <Ionicons style={{marginLeft: 17}} name={'ios-menu'} size={30}/>
        </TouchableOpacity>
        </View>
      )
  }
}
