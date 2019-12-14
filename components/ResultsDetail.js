import React from 'react'
import { View, Image, Text, StyleSheet, FlatList, ImageBackground } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import OpenTag from '../components/OpenTag'
import ClosedTag from '../components/ClosedTag'


const ResultsDetail = ({navigation, result}) => {
  //console.log(result.id)
  return (
    <View style={styles.background}>
      <Image style={styles.image} source={{ uri: !result.image_url ? 'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/Asset%201.jpg?alt=media&token=5c14befd-83cc-4aaa-9ac1-896d5908e50c' : result.image_url }} />
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
      {!result.is_closed &&
        <View>
          <OpenTag />
        </View>
      }
      {result.is_closed &&
        <View>
          <ClosedTag />
        </View>
      }
        <Ionicons
          style={{color:'gray', alignSelf:'flex-end', marginTop:5}}
          size={20}
          name='ios-heart-empty'
          />
        </View>
      <View style={styles.topText}>
        <Text style={styles.name}>{result.name}
        <Text style={styles.price}> {result.price}</Text>
        </Text>
        </View>
        <View style={{alignSelf: 'center', justifyContent:'center',alignItems:'center'}}>
        <FlatList
          style={{flexDirection:'row',flexWrap:'wrap'}}
          horizontal
          data={result.categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return (

              <Text style={styles.categories}> •{item.alias} </Text>

            )
          }}
      />
      </View>
      <View style={styles.bottomText}>
      <View style={{flexDirection: 'row'}}>
        <Feather
          style={{marginHorizontal:5, color:'#FA2D9B',}}
          size={25}
          name='clock'
          />
          <Text style={styles.minutes}>30-60Min</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons
            style={{marginHorizontal:5, color:'#F19D39'}}
            size={35}
            name='md-star-outline'
            />
          <Text style={styles.rating}>{result.rating}</Text>
            <Text style={styles.count}>({result.review_count})</Text>
        </View>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  background: {
    backgroundColor:'#F7F7F7',
    width:250,
    height:310,
    marginLeft:10,
    borderRadius: 5,
  },
  image: {
    alignSelf:'center',
    width:250,
    height:120,
    borderRadius: 5,
  },
  name: {
    marginTop:5,
    fontWeight:'600',
    fontSize: 18,
    fontFamily:'Avenir Next',
    alignSelf:'center',
  },
  price: {
    marginTop:5,
    color:'#33A756',
    fontSize:16,
    fontWeight: 'bold',
    marginHorizontal:5,
    alignSelf:'center',
  },
  categories: {
    color:'#707070',
    textTransform: 'capitalize',
  },
  minutes: {
    alignSelf: 'center',
    fontSize:14,
    fontWeight:'bold',
    color:'#2856AB'
  },
  rating: {
    alignSelf: 'center',
    fontSize:14,
    fontWeight:'bold'
  },
  count: {
    alignSelf: 'center',
    fontSize:14,
    fontWeight:'400',
    marginRight:5,
  },
  topText: {
    margin:3,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  bottomText: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop:50,
    marginRight:5
  }
})

export default ResultsDetail
