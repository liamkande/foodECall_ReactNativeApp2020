import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getFoods } from '../actions/post'
import { SafeAreaView, FlatList, Image, Text, View } from "react-native"
import { FoodListItemStyle } from '../AppStyles'
import ResultsDetail from '../components/ResultsDetail'




class FoodList extends Component {

  componentDidMount() {
    this.props.getFoods()
  }


  renderItem = ({ item }) => (
    <View>
      {/* <Image style={{width:200, height:200}} source={{uri: item.mainPhotoURL}}/>
      <Text style={{fontSize:30}}>
        {item.name}
      </Text>
      <Text style={{color:'green'}}>
      {item.categories.map(category => category.name)}
      </Text>
      <Text style={{color:'gray'}}>
        {item.displayAddress}
      </Text> */}

    
     
  
      

      {/* <Text style={{color:'red'}}>
        {item.choices.map(choice => choice.title)}
      </Text>
      <Text style={{color:'green'}}>
        {item.choices.map(choice => choice.subTitle)}
      </Text>
      <Text style={{color:'blue'}}>
        {item.choices.map((choice) => choice.options.map((option) => option.selections.map((selection) => selection.title )))}
      </Text> */}

    </View>
)


  render() {
    return (
        <SafeAreaView style={{flex:1}}>
          <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.props.foods.feed}
          renderItem={this.renderItem}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
                <ResultsDetail result={item}/>
            )
          }}
          />
        </SafeAreaView>

    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getFoods }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    foods: state.foods
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodList)
