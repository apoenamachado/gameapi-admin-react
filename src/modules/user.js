export const ADD_REQUESTED = 'USER/ADD_REQUESTED'
export const ADD = 'USER/ADD'
export const REMOVE_REQUESTED = 'USER/REMOVE_REQUESTED'
export const REMOVE = 'USER/REMOVE'
export const SET_TOKEN = 'USER/SET_TOKEN'
export const UNSET_TOKEN = 'USER/UNSET_TOKEN'

const initialState = { 
  id: null,
  isAuthenticated:false,
  token: null,
  isAdd: false,
  isRemove: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REQUESTED:
      return {
        ...state,
        isAdd: true
      }

    case ADD:
      return {
        ...state,
        id:state.id,
        isAdd: !state.isAdd
      }

    case REMOVE_REQUESTED:
      return {
        ...state,
        isRemove: true
      }

    case REMOVE:
      return {
        ...state,
        isRemove: !state.isRemove
      }
    case SET_TOKEN:
      console.log('SET_TOKEN: action: ', action)
      return {
        ...state,
        token:action.token,
        isAuthenticated:action.isAuthenticated,
      }
    case UNSET_TOKEN:
      return {
        ...state,
        token:null,
        isAuthenticated:false,
      }
    default:
      return state
  }
}

export const login = (username, password, callback) => {
  return dispatch => {
    return fetch('https://apoena.org/api-token-auth/', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username:username,
        password:password
      })
    }).then(function(response) {
      console.log('Response: ', response)
      if(response.ok){
        return response.json();
      }
      return false;
    }).then(function(data) {
      console.log('Login token: ', data, data.token)
      if(data && data.token){
        //that.go('/components/cards')
        dispatch({
          type: SET_TOKEN,
          token: data.token,
          isAuthenticated:true
        })
        callback(true)
        return true
      }else{
        //that.go('/')
        dispatch({
          type: UNSET_TOKEN
        })
        callback(false)
        return false
      }
    }).catch(function (err) {
      console.log('Login error: ', err)
      callback(false)
      return false
    })
  }
}



export const add = () => {
  return dispatch => {
    dispatch({
      type: ADD_REQUESTED
    })

    dispatch({
      type: ADD
    })
  }
}

export const addAsync = () => {
  return dispatch => {
    dispatch({
      type: ADD_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: ADD
      })
    }, 3000)
  }
}

export const remove = () => {
  return dispatch => {
    dispatch({
      type: REMOVE_REQUESTED
    })

    dispatch({
      type: REMOVE
    })
  }
}

export const removeAsync = () => {
  return dispatch => {
    dispatch({
      type: REMOVE_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: REMOVE
      })
    }, 3000)
  }
}
