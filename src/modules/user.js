export const USER_SET_TOKEN = 'USER/SET_TOKEN'
export const USER_UNSET_TOKEN = 'USER/UNSET_TOKEN'

const initialState = { 
  id: null,
  isAuthenticated:false,
  token: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SET_TOKEN:
      console.log('SET_TOKEN: action: ', action)
      return {
        ...state,
        token:action.token,
        isAuthenticated:action.isAuthenticated,
      }
    case USER_UNSET_TOKEN:
      console.log('UNSET_TOKEN:')
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
    return fetch(`${process.env.REACT_APP_API_URL}/api-token-auth/`, {
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
        dispatch({
          type: USER_SET_TOKEN,
          token: data.token,
          isAuthenticated:true
        })
        callback(true)
        return true
      }else{
        dispatch({
          type: USER_UNSET_TOKEN
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

export const logout = (callback) => {
  return dispatch => {
    dispatch({
      type: USER_UNSET_TOKEN
    })
    callback(false)
  }
}
