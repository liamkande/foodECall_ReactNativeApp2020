import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getRestaurants, likePost} from '../actions/post'
import { SafeAreaView, FlatList, ImageBackground, View, Text, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FoodListItemStyle } from '../AppStyles'
import ResultsDetail from '../components/ResultsDetail'




class RestaurantList extends Component {

  componentDidMount() {
   //this.props.getRestaurants()
    
  }
state= {
  newId: '03abbbe2-e080-4444-972c-df0e29db0e1e'
}

  render() {

    const {uid, getRestaurants, restaurants, currentId } = this.props
  
    return (
        <SafeAreaView style={{flex:1}}>
          <ImageBackground style={{width: '100%', height: '100%'}}source={{uri: `${this.props.restaurants.bgImg}`}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={restaurants.feed}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                
                  return ( 
                    <ResultsDetail result={item} userId={uid} categoriesID={this.state.newId} reload={getRestaurants}/> 
                  )
              }}
              />

            </ImageBackground>
        </SafeAreaView>

    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getRestaurants}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    uid: state.user.login.uid,
   
   
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList)
