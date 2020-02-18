import {combineReducers } from 'redux'


const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
        return {...state, login: action.payload}
      case 'UPDATE_EMAIL':
        return {...state, email: action.payload}
      case 'UPDATE_PASSWORD':
        return {...state, password: action.payload}
        case 'UPDATE_CITY':
          return {...state, city: action.payload}
          case 'UPDATE_STATE':
            return {...state, state: action.payload}
        case 'UPDATE_FIRSTNAME':
          return {...state, firstNm: action.payload}
          case 'UPDATE_LASTNAME':
            return {...state, lastNm: action.payload}
            case 'UPDATE_PHONE':
              return {...state, phone: action.payload}
              case 'UPDATE_PHOTO':
                return {...state, photo: action.payload }
                case 'UPDATE_ADDRESSES':
                  return {...state, addresses: action.payload }
                  case 'UPDATE_PAYMENTS':
                    return {...state, payments: action.payload }

      default:
        return state
  }
}

const post = (state= {}, action) => {
  switch (action.type) {
    case 'UPDATE_PHOTO':
    return { ...state, photo: action.payload }

      case 'UPDATE_LOCATION':
  return { ...state, location: action.payload }
    case 'GET_POSTS':
      return {...state, feed: action.payload}
      case 'GET_MAIN_BG_IMG':
        return {...state, mainBgImg: action.payload}
    default:
      return state
  }
}

const categories = (state= {}, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {...state, feed: action.payload}
      case 'GET_BG_IMG':
        return {...state, bgImg: action.payload}
    default:
      return state
  }
}


const foods = (state= {}, action) => {
  switch (action.type) {
    case 'GET_FOODS':
      return {...state, feed: action.payload}
      case 'GET_BG_IMG':
        return {...state, bgImg: action.payload}
    default:
      return state
  }
}



const modal = (state = null, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, modal: action.payload }
    case 'CLOSE_MODAL':
      return { ...state, modal: false }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user,
  post,
  modal,
  categories,
  foods,
})

export default rootReducer
