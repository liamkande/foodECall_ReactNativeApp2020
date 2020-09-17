import React from 'react'
import { View, Image, Text, StyleSheet, FlatList, ImageBackground } from 'react-native'
import { Ionicons, Feather } from '@expo/vector-icons'
import OpenTag from '../components/OpenTag'
import ClosedTag from '../components/ClosedTag'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { likeRestaurant, unlikeRestaurant } from '../actions/post'




const ResultsDetail = ({userId,result,categoriesID, reFetch}) => {
  
  return (
    <View style={styles.background}>
      <Image style={styles.image} source={{ uri: !result.mainPhotoURL  ? 'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/Asset%201.jpg?alt=media&token=5c14befd-83cc-4aaa-9ac1-896d5908e50c' : result.mainPhotoURL }} />
      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
 

{result.hours.map((item, index) => {
                return (
                    <View key={index}>
                             {item.is_open_now &&
                                <View>
                                  <OpenTag />
                                </View>
                              }
                              {!item.is_open_now &&
                                <View>
                                    <ClosedTag />
                                </View>
                              }
                    </View>
                )
            })}

          <TouchableOpacity onPress={result.favorided.includes(userId) ? unlikeRestaurant(result.id, userId,categoriesID, reFetch) :  likeRestaurant(result.id, userId, categoriesID, reFetch)}>
            <Ionicons
            style={{color:'red', alignSelf:'flex-end', marginTop:5}}
            size={25}
            name={result.favorided.includes(userId) ? 'ios-heart' : 'ios-heart-empty'}
            />
          </TouchableOpacity>
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
              <Text style={styles.categories}> •{item.name} </Text>
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
          <Text style={styles.rating}>{result.yelpRating}</Text>
            <Text style={styles.count}>({result.yelpReviewCount})</Text>
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
    marginTop:10
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
