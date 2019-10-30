/**********************************************************************
 * CONTANTS
 ***********************************************************************/
export const USER_SET_TOKEN = 'USER/SET_TOKEN'
export const USER_UNSET_TOKEN = 'USER/UNSET_TOKEN'
export const USER_SET_USER = 'USER/SET_USER'

const API_URL = process.env.REACT_APP_API_URL

/**********************************************************************
 * REDUX 
 ***********************************************************************/
const initialState = { 
  id: null,
  user:{
    id:null,
    username:null,
    email:null,
    first_name:null,
    last_name:null
  },
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
    case USER_SET_USER:
      console.log('SET_USER: action: ', action)
      return {
        ...state,
        user:action.user
      }
    default:
      return state
  }
}


/**********************************************************************
 * ACTIONS
 ***********************************************************************/
export const login = (username, email, password, callback) => {
  return dispatch => {
    return fetch(`${process.env.REACT_APP_API_URL}/rest-auth/login/`, {
    //return fetch(`${process.env.REACT_APP_API_URL}/api-token-auth/`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username:username,
        email:email,
        password:password
      })
    }).then(function(response) {
      console.log('Response: ', response)
      if(response.ok){
        return response.json();
      }
      return false;
    }).then(function(data) {
      console.log('Login token: ', data, data.key)
      if(data && data.key){
        dispatch({
          type: USER_SET_TOKEN,
          token: data.key,
          isAuthenticated:true
        })
        //callback(true)
        callback(data)
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

export const signUp = (username, email, password1, password2, callback) => {
  return dispatch => {
    return fetch(`${process.env.REACT_APP_API_URL}/rest-auth/registration/`, {
    //return fetch(`${process.env.REACT_APP_API_URL}/api-token-auth/`, {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username:username,
        email:email,
        password1:password1,
        password2:password2,
      })
    }).then(function(response) {
      console.log('Response: ', response)
      if(response.ok){
        return response.json();
      }
      return false;
    }).then(function(data) {
      console.log('Login token: ', data, data.key)
      if(data && data.key){
        dispatch({
          type: USER_SET_TOKEN,
          token: data.key,
          isAuthenticated:true
        })
        callback(data)
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


export const getUser = (token, onSuccess, onError) => {
  return dispatch => {
    return fetch(`${API_URL}/rest-auth/user/`, {
      method: 'get',
      headers: {
        'Authorization': 'Token '+token
      }
    }).then(function(response) {
      if(response.ok){
        return response.json();
      }else{
        console.log('getUser: Erro 1', response)
        onError(response)
        return false;
      }
    }).then(function(data) {
      console.log('getUser: data: ', data)
      if(data){
        
        dispatch({
          type: USER_SET_USER,
          user: data
        })

        onSuccess(data)
        return true
      }
    })
    /*
    .catch(function (err) {

      err.then(function(result) {
          console.log('Erro 3', result['PromiseValue'])  
        onError(result.value)
      });
      return false
    })
    */
    
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
