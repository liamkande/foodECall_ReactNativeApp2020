import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import SearchTitle from '../components/SearchTitle'



const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price
    })
  }


// useEffect(() => {
//   console.log(results.length)
// })

  return (
    <>
    <ImageBackground style={{width: '100%', height: '100%'}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/kitchenBG.png?alt=media&token=cb6585f7-b26b-4bd1-891a-69f1578840ea'}}>
    <SafeAreaView style={{flex:1, backgroundColor:'rgba(000, 00, 00, .3)', }}>
      <SearchTitle />
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => { searchApi(term); console.log(`new Search: ${term} returned: ${results.length}Results at ${Date.now()}`) }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor:'rgba(255, 255, 255, .3)', alignSelf:'center', borderRadius:5, width:'95%'}}>
      <ResultsList results={filterResultsByPrice('$')}/>
      <ResultsList results={filterResultsByPrice('$$')} />
      <ResultsList results={filterResultsByPrice('$$$')} />
      <ResultsList results={filterResultsByPrice('$$$$')}/>
      </ScrollView>
      </SafeAreaView>
      </ImageBackground>
    </>
  )
}

export default SearchScreen
