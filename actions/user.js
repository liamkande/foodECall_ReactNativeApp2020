import firebase from 'firebase'
import db from '../config/firebase'



export const updateEmail = (email) => {
  return {type:'UPDATE_EMAIL', payload: email}
}

export const updatePassword = (password) => {
  return {type:'UPDATE_PASSWORD', payload: password}
}

export const updateCity = (city) => {
  return {type:'UPDATE_CITY', payload: city}
}

export const updateState = (state) => {
  return {type:'UPDATE_STATE', payload: state}
}

export const updateUsername = (username) => {
  return {type:'UPDATE_USERNAME', payload: username}
}
export const updateFirstNm = (firstNm) => {
  return {type:'UPDATE_FIRSTNAME', payload: firstNm}
}
export const updateLastNm = (lastNm) => {
  return {type:'UPDATE_LASTNAME', payload: lastNm}
}
export const updatePhone = (phone) => {
  return {type:'UPDATE_PHONE', payload: phone}
}
export const updateBio = (bio) => {
  return {type:'UPDATE_BIO', payload: bio}
}

export const updatePhoto = (photo) => {
	return {type: 'UPDATE_PHOTO', payload: photo}
}

export const updateAdresses = (addresses) => {
	return {type: 'UPDATE_ADDRESSES', payload: addresses}
}

export const updatePayments = (payments) => {
	return {type: 'UPDATE_PAYMENTS', payload: payments}
}

export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await firebase.auth().signInWithEmailAndPassword(email, password)
			dispatch(getUser(response.user.uid))
		} catch (e) {
			alert(e)
		}
	}
}

export const facebookLogin = () => {
	return async (dispatch) => {
		try {
			const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1421365791339587')
      if(type === 'success') {
				// Build Firebase credential with the Facebook access token.
				const credential = await firebase.auth.FacebookAuthProvider.credential(token);
				// Sign in with credential from the Facebook user.
				const response = await firebase.auth().signInAndRetrieveDataWithCredential(credential)
				const user = await db.collection('users').doc(response.uid).get()
				if(!user.exists){
					const user = {
						uid: response.uid,
						email: response.email,
						username: response.displayName,
						photo: response.photoURL,
						token: null,
					}
					db.collection('users').doc(response.uid).set(user)
					dispatch({type: 'LOGIN', payload: user})
				} else {
					dispatch(getUser(response.uid))
				}
			}
		} catch (e) {
			console.log(e)
		}
	}
}

export const getUser = (uid) => {
	return async (dispatch, getState) => {
		try {
			const user = await db.collection('users').doc(uid).get()
			dispatch({type: 'LOGIN', payload: user.data()})
		} catch (e) {
			alert(e)
		}
	}
}


export const updateUser = () => {
  return async ( dispatch, getState )  => {
    const { uid, photo, addresses, payments } = getState().user

    try {
      db.collection('users').doc(uid).update({
        photo: photo,
        addresses: addresses,
        payments: payments,

      })
    }
    catch(e) {
      alert(e)
    }
  }
}

export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password, phone, firstNm, lastNm, photo, username, city, state, homeAddress1, homeAddress2, homeCity, homeState, homeZipCode} = getState().user
			const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
			if(response.user.uid) {
				const user = {
					uid: response.user.uid,
					email: email,
          firstNm: firstNm,
          lastNm: lastNm,
          username: `${firstNm} ${lastNm}`,
          photo: '',
          phone: phone,
          addresses: {home:{name:'', address1:'', address2:'', city:'', state:'', zipCode:'' },
                      work:{name:'', address1:'', address2:'', city:'', state:'', zipCode:'' },
                      campus:{name:'', address1:'', address2:'', city:'', state:'', zipCode:'' },
                      custom:{name:'', address1:'', address2:'', city:'', state:'', zipCode:'' },
                     },
          payments: [],
          token: null,
				}
				db.collection('users').doc(response.user.uid).set(user)
				dispatch({type: 'LOGIN', payload: user})
			}
		} catch (e) {
			alert(e)
		}
	}
}
