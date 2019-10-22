export const ADD_STUDIO_REQUESTED = 'STUDIO/ADD_REQUESTED'
export const ADD_STUDIO = 'STUDIO/ADD'
export const STUDIO_SET = 'STUDIO/SET'
export const REMOVE_REQUESTED = 'STUDIO/REMOVE_REQUESTED'
export const REMOVE = 'STUDIO/REMOVE'

const initialState = { 
  studios:[],
  isAdd: false,
  isRemove: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDIO_REQUESTED:
      return {
        ...state,
        isAdd: true
      }

    case ADD_STUDIO:
      console.log('ADD_STUDIO: ', state, action)
      return Object.assign({}, state, {
        studios: [
          ...state.studios,
          action.studio
        ],
        isAdd: !state.isAdd
      })
    case STUDIO_SET:
      return {
        ...state,
        studios: action.studios
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

    default:
      return state
  }
}

export const addStudio = (studio, token) => {
  return dispatch => {
    dispatch({
      type: ADD_STUDIO_REQUESTED
    })

    // Form Data
    var formData = new FormData();
  
    formData.append('id', studio.id);
    formData.append('name', studio.name);
    formData.append('slug', studio.slug);
    formData.append('description', studio.description);
    // Imagem
    formData.append(`image`, studio.image);

    return fetch('https://apoena.org/studio/', {
      method: 'post',
      headers: {
        //'Content-Type':'application/json',
        'Authorization': 'Token '+token
      },
      body: formData,
    }).then(function(response) {
      console.log('Response: ', response)
      if(response.ok){
        return response.json();
      }
      return false;
    }).then(function(data) {
      console.log('Studio response: ', data)
      dispatch({
        type: ADD_STUDIO,
        studio: data
      })
      return true
      /*
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
      */
    }).catch(function (err) {
      console.log('Studio Add error: ', err)
      //callback(false)
      return false
    })
  }
}

export const getStudioList = (token) => {
  return dispatch => {
    return fetch('https://apoena.org/studio/', {
      method: 'get',
      headers: {
        //'Content-Type':'application/json',
        'Authorization': 'Token '+token
      },
      //body: formData,
    }).then(function(response) {
      console.log('Response: ', response)
      if(response.ok){
        return response.json();
      }
      return false;
    }).then(function(data) {
      console.log('Studios response: ', data)
      dispatch({
        type: STUDIO_SET,
        studios: data
      })
      return true
    }).catch(function (err) {
      console.log('Studio Add error: ', err)
      //callback(false)
      return false
    })
  }
}


/*
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
*/
export const addAsync = () => {
  return dispatch => {
    dispatch({
      type: ADD_STUDIO_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: ADD_STUDIO
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
