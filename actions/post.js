import firebase from 'firebase'
import db from '../config/firebase'
import uuid from 'uuid'
import { reload } from 'expo/build/Updates/Updates'


export const updatePhoto = (input) => {
	return {type: 'UPDATE_PHOTO', payload: input}
}

export const updateLocation = (input) => {
	return {type: 'UPDATE_LOCATION', payload: input}
}

export const uploadPost = () => {
	return async (dispatch, getState) => {
		try {
			const { post, user } = getState()
			const id = uuid.v4()
			const upload = {
				id: id,
				postPhoto: post.photo || ' ',
				uid: user.uid,
				photo: user.photo,
				username: user.username,
				likes:[],
				comments:[]
			}
			db.collection('posts').doc(id).set(upload)
		} catch (e) {
			alert(e)
			console.error(e)
		}
	}
}

export const uploadLocation = () => {
	return async (dispatch, getState) => {
		try {
			const { post, user } = getState()
			const id = uuid.v4()
			const upload = {
				id: id,
				uid: user.uid,
				username: user.username,
				postLocation: post.location || ' ',
			}
			db.collection('posts').doc(id).set(upload)
		} catch (e) {
			alert(e)
			console.error(e)
		}
	}
}



export const getPosts = () => {
	return async (dispatch, getState) => {
		try {
			const posts = await db.collection('posts').get()
			let array = []
			const mainBgImg = 'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/foodECallBG%402x.png?alt=media&token=e4fce174-5feb-4b47-9e8b-cf687a739444'
			posts.forEach((post)=>{
				array.push(post.data())
			})
			dispatch({type: 'GET_POSTS', payload: array})
			dispatch({type: 'GET_MAIN_BG_IMG', payload: mainBgImg})
		} catch (e) {
			alert(e)
			console.error(e)
		}
	}
}

export const getCategories = () => {
	return async (dispatch, getState) => {
		try {
			const categories = await db.collection('categories').get()
			let array = []
			const bgImg = 'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/kitchenBG.png?alt=media&token=cb6585f7-b26b-4bd1-891a-69f1578840ea'
			categories.forEach((category)=>{
				array.push(category.data())
			})
			dispatch({type: 'GET_CATEGORIES', payload: array})
			dispatch({type: 'GET_BG_IMG', payload: bgImg})
		} catch (e) {
			alert(e)
			console.error(e)
		}
	}
}

export const getRestaurants = () => {
	return async (dispatch, getState) => {
			
		try {
			const restaurants = await db.collection('restaurants').get()
			let array = []
			let color = 'ios-heart'
			const bgImg = 'https://firebasestorage.googleapis.com/v0/b/food-e-call-nativeapp.appspot.com/o/kitchenBG.png?alt=media&token=cb6585f7-b26b-4bd1-891a-69f1578840ea'
			restaurants.forEach((restaurant)=>{
				array.push(restaurant.data())
			})
			dispatch({type: 'GET_RESTAURANTS', payload: array})
			dispatch({type: 'GET_BG_IMG', payload: bgImg})
			
			
		} catch (e) {
			alert(e)
			console.error(e)
		}
	}
}

export const likeRestaurant = (id, uid,reload) => {
	return async () => {

		try {
			await db.collection('restaurants').doc(id).update({
				favorided: firebase.firestore.FieldValue.arrayUnion(uid)
			 })
			reload()
			
		} catch (e) {
			alert(e)
			console.error(e)
		}

		return 
	}
}

export const unlikeRestaurant = (id, uid, reload) => {
	return async() => {
	  
	  try {
		await db.collection('restaurants').doc(id).update({
			favorided: firebase.firestore.FieldValue.arrayRemove(uid)
		})
		
		reload()
	  } catch(e) {
		console.error(e)
	  }
	}
  }


