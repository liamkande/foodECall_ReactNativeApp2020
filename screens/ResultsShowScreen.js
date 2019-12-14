import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import yelp from '../api/yelp'
import { FontAwesome, Ionicons,Feather } from '@expo/vector-icons'
import {pink} from '../utils/colors'


const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  console.log(result)


  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }


  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }





  return (
    <>
    <View style={{width:'100%', height:'30%'}}>
    <ImageBackground style={{width: '100%', height:'100%'}} source={{uri: !result.image_url ? 'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/Asset%201.jpg?alt=media&token=5c14befd-83cc-4aaa-9ac1-896d5908e50c' : result.image_url}}>
    <View style={{width:'100%', height:'100%', backgroundColor:'rgba(000, 00, 00, .3)'}}>
    <TouchableOpacity  style={{marginTop:40}} onPress={() => navigation.goBack()}>
      <FontAwesome style={{marginLeft:20}} name='close' size={40} color={pink} />
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
    <View style={styles.topText}>
      <Text style={styles.name}>{result.name}
      <Text style={styles.price}> {result.price}</Text>
      </Text>
      <Ionicons
        style={{color:'gray', marginRight:5}}
        size={30}
        name='ios-heart-empty'
        />
      </View>
      <View>
      <FlatList
        style={{flexDirection:'row',flexWrap:'wrap', marginTop:-5}}
        horizontal
        data={result.categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.categories}>•{item.alias} </Text>
          )
        }}
        />
    </View>
      <Text style={{fontWeight:'200', fontSize:14, margin:8, color:'black'}}>{result.location.address1}, {result.location.city}, {result.location.state}, {result.location.zip_code}</Text>
      <View style={{height:35, backgroundColor:'#E2E2E2'}}>
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
        <TouchableOpacity style={{marginRight:8}} onPress={() => navigation.goBack()}>
          <Text style={styles.minutes}>More Photos</Text>
        </TouchableOpacity>
      </View>
      </View>

      <View style={{backgroundColor:'#312F2F', height:'100%'}}>
        <Text style={{color:'white', fontSize:24, fontWeight:'600', marginTop:8, marginLeft:8}}>Menu</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'#9FEAB3',  fontWeight:'600', margin:8}}>Entrées</Text>
        <Text style={{color:'white', fontWeight:'600', margin:8}}>Salads</Text>
        <Text style={{color:'white', fontWeight:'600', margin:8}}>Sides</Text>
        <Text style={{color:'white', fontWeight:'600', margin:8}}>Beverages</Text>
        </View>
        <ScrollView>
        <View style={{backgroundColor:'white', height:80, borderRadius:5, margin:8, flexDirection:'row',flexWrap:'wrap', justifyContent: 'space-between', alignItems:'center'}}>
          <View style={{width:'70%', marginLeft:17}}>
          <Text style={{fontSize:14,fontWeight:'bold',color:'#2856AB'}}>Ranch Flank Steak Rice Bowl</Text>
          <Text style={{fontSize:12}}>Fully dressed with shredded cabbage, pickles, red onions and mayo...</Text>
          </View>
          <Image style={{width:80, height:80, borderRadius:5}} source={{uri: result.image_url}}/>
        </View>

        <View style={{backgroundColor:'white', height:80, borderRadius:5, margin:8, flexDirection:'row',flexWrap:'wrap', justifyContent: 'space-between', alignItems:'center'}}>
          <View style={{width:'70%', marginLeft:17}}>
          <Text style={{fontSize:14,fontWeight:'bold',color:'#2856AB'}}>Ranch Flank Steak Rice Bowl</Text>
          <Text style={{fontSize:12}}>Fully dressed with shredded cabbage, pickles, red onions and mayo...</Text>
          </View>
          <Image style={{width:80, height:80, borderRadius:5}} source={{uri: result.image_url}}/>
        </View>

        <View style={{backgroundColor:'white', height:80, borderRadius:5, margin:8, flexDirection:'row',flexWrap:'wrap', justifyContent: 'space-between', alignItems:'center'}}>
          <View style={{width:'70%', marginLeft:17}}>
          <Text style={{fontSize:14,fontWeight:'bold',color:'#2856AB'}}>Ranch Flank Steak Rice Bowl</Text>
          <Text style={{fontSize:12}}>Fully dressed with shredded cabbage, pickles, red onions and mayo...</Text>
          </View>
          <Image style={{width:80, height:80, borderRadius:5}} source={{uri: result.image_url}}/>
        </View>

        <View style={{backgroundColor:'white', height:80, borderRadius:5, margin:8, flexDirection:'row',flexWrap:'wrap', justifyContent: 'space-between', alignItems:'center'}}>
          <View style={{width:'70%', marginLeft:17}}>
          <Text style={{fontSize:14,fontWeight:'bold',color:'#2856AB'}}>Ranch Flank Steak Rice Bowl</Text>
          <Text style={{fontSize:12}}>Fully dressed with shredded cabbage, pickles, red onions and mayo...</Text>
          </View>
          <Image style={{width:80, height:80, borderRadius:5}} source={{uri: result.image_url}}/>
        </View>


        </ScrollView>
      </View>

  </>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    margin: 10
  },
  topText: {
    marginLeft:5,
    flexDirection: 'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
  },
  name: {
    marginTop:5,
    fontWeight:'600',
    fontSize: 24,
    fontFamily:'Avenir Next',
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
    marginLeft:5,
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
  bottomText: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

})

export default ResultsShowScreen


// <FlatList
//   data={result.hours}
//   keyExtractor={(item, index) => index.toString()}
//   renderItem={({ item }) => {
//     return (
//       <View>
//       <FlatList
//         data={item.open}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => {
//           return (<Text>{`Day:${item.day} - Open:${item.start} - Closed:${item.end}`}</Text>)
//         }}
//       />
//       </View>
//
//     )
//   }}
// />
//
//
//
//
// <FlatList
//   data={result.photos}
//   keyExtractor={(photo) => photo}
//   renderItem={({ item }) => {
//     return <Image style={styles.image} source={{uri: item}} />
//   }}
// />
