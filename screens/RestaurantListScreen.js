import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFoods } from '../actions/post'
import { SafeAreaView, FlatList, ImageBackground } from "react-native"
import { FoodListItemStyle } from '../AppStyles'
import ResultsDetail from '../components/ResultsDetail'




class FoodList extends Component {

  componentDidMount() {
    this.props.getFoods()
  
  }


  render() {
    return (
        <SafeAreaView style={{flex:1}}>
      <ImageBackground style={{width: '100%', height: '100%'}}source={{uri: `${this.props.foods.bgImg}`}}>
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.props.foods.feed}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (

                <ResultsDetail result={item} userId={this.props.uid} />
                
            )
          }}
          />

         </ImageBackground>
        </SafeAreaView>

    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getFoods}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    foods: state.foods,
    uid: state.user.login.uid
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
