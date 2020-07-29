import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCategories } from '../actions/post'
import { FlatList,SafeAreaView, Text, View, TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import FilterCart from '../components/FilterCart'




class CategoriesSearch extends Component {

  componentDidMount() {
  this.props.getCategories()
}

  render() {
    return (
        <SafeAreaView style={{flex:1}}>
          <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={this.props.categories.feed}
          renderItem={({ item }) => {
            return (
              <FilterCart item={item} />

            )
          }}

          keyExtractor={item => item.name}
          />


          
        </SafeAreaView>

    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCategories}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesSearch)
