/**********************************************************************
 * CONTANTS
 ***********************************************************************/
export const STUDIO_ADD = 'STUDIO/ADD'
export const STUDIO_UPDATE = 'STUDIO/UPDATE'
export const STUDIOS_SET = 'STUDIOS/SET'
export const STUDIO_SET_CURRENT = 'STUDIO/SET_CURRENT'
export const STUDIO_REMOVE = 'STUDIO/REMOVE'

const API_URL = process.env.REACT_APP_API_URL

/**********************************************************************
 * REDUX 
 ***********************************************************************/

const studioInitialState = { 
  studios:[],
  studio:null
}

export default (state = studioInitialState, action) => {
  switch (action.type) {
    case STUDIO_ADD:
      return Object.assign({}, state, {
        studios: [
          ...state.studios,
          action.payload
        ]
      })
    case STUDIOS_SET:
      return {
        ...state,
        studios: action.payload
      }
    case STUDIO_SET_CURRENT:
        console.log('STUDIO_SET_CURRENT: ', action.studio)
        return {
          ...state,
          studio: action.payload
        }
    case STUDIO_REMOVE:
      console.log('STUDIO_REMOVE: ', action.studio)
      return Object.assign({}, state, {
        studios: [
          ...state.studios.filter(row => row.id != action.payload.id)
        ]
      })
    /*  
    case STUDIO_UPDATE:
        console.log('STUDIO_UPDATE: ', ...action.studios)
        let studios  = ...state.studios
        const key = Object.keys(studios).find(id => studios[id] === action.studio.id);
        console.log('chave: ', key, studios[key])

        studios.filter(row => row.id != action.studio.id)
        return Object.assign({}, state, {
          studios: state.studios
        })
        */
    default:
      return state
  }
}

/**********************************************************************
 * ACTIONS
 ***********************************************************************/
/**
 * Add Studio
 * @param {*} studio 
 * @param {*} token 
 */
export const addStudio = (studio, token, onSuccess, onError) => {
  return dispatch => {

    // Form Data
    var formData = new FormData();
    //formData.append('id', studio.id);
    formData.append('name', studio.name);
    formData.append('slug', studio.slug);
    formData.append('description', studio.description);
    if (studio.image) {
      formData.append(`image`, studio.image); // File
    }

    return fetch(`${API_URL}/studio/`, {
      method: 'post',
      headers: {
        'Authorization': 'Token '+token
      },
      body: formData,
    }).then(function(response) {
      if(response.ok){
        return response.json();
      }else{
        response.json().then(function(value){
          onError(value)
          return false;
        })
      }
    }).then(function(data) {
      if(data){
        dispatch({
          type: STUDIO_ADD,
          payload: data
        })
        onSuccess(data)
        return true
      }
      return false
    })
    .catch(function (err) {
      console.log('Erro: ', err)
      //onError(err)
    })
  }
}

export const updateStudio = (studio, token, onSuccess, onError) => {
  return dispatch => {

    console.log('studio: ', studio)

    // Form Data
    var formData = new FormData();
    formData.append('id', studio.id);
    formData.append('name', studio.name);
    formData.append('slug', studio.slug);
    formData.append('description', studio.description);
    if(studio.image ) {
      console.log('Tipo da imagem: ', (typeof studio.image))
      if(typeof studio.image === 'object'){
        formData.append(`image`, studio.image); // File
      }      
    }

    return fetch(`${API_URL}/studio/${studio.id}/`, {
      method: 'put',
      headers: {
        'Authorization': 'Token '+token
      },
      body: formData,
    }).then(function(response) {
      if(response.ok){
        return response.json();
      }else{
        response.json().then(function(value){
          onError(value)
          return false;
        })  
      }
    }).then(function(data) {
      console.log('updateStudio: data: ', data)
      if(data){
        dispatch({
          type: STUDIO_SET_CURRENT,
          payload: data
        })
        /*
        dispatch({
          type: STUDIO_UPDATE,
          studio: data
        })
        */
        onSuccess(data)
        return true
      }
    })
    /*.catch(function (err) {

      err.then(function(result) {
          console.log('Erro 3', result['PromiseValue'])  
        onError(result.value)
      });
      return false
    })
    */
  }
}


export const getStudio = (studio, token, onSuccess, onError) => {
  return dispatch => {

    return fetch(`${API_URL}/studio/${studio.id}/`, {
      method: 'get',
      headers: {
        'Authorization': 'Token '+token
      }
    }).then(function(response) {
      if(response.ok){
        return response.json();
      }else{
        console.log('getStudio: Erro 1', response)
        onError(response)
        return false;
      }
    }).then(function(data) {
      console.log('getStudio: data: ', data)
      if(data){
        /*
        dispatch({
          type: STUDIO_SET_CURRENT,
          game: data
        })
        */
        onSuccess(data)
        return true
      }
    })
    /*.catch(function (err) {

      err.then(function(result) {
          console.log('Erro 3', result['PromiseValue'])  
        onError(result.value)
      });
      return false
    })
    */
  }
}

/**
 * Get Studio List
 * @param {*} token 
 */
export const listStudio = (token, onSuccess) => {
  return dispatch => {
    return fetch(`${API_URL}/studio/`, {
      method: 'get',
      headers: {
        'Authorization': 'Token '+token
      },
    }).then(function(response) {
      if(response.ok){
        return response.json();
      }
      return false;
    }).then(function(data) {
      dispatch({
        type: STUDIOS_SET,
        payload: data
      })
      onSuccess(data)
      return true
    }).catch(function (err) {
      return false
    })
  }
}

/**
 * Set Current Studio
 * @param {*} studio 
 */
export const setCurrentStudio = (studio) => {
  return dispatch => {
      dispatch({
        type: STUDIO_SET_CURRENT,
        payload: studio
      })
  }
}


/**
 * Remove Studio
 * @param {*} token 
 */
export const removeStudio = (studio, token) => {
  return dispatch => {

    return fetch(`${API_URL}/studio/${studio.id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      },
      /*
      body: {
        id: studio.id
      },
      */
    }).then(function(response) {
      if(response.ok){
        console.log('removeStudio: ', response)
        console.log('Removendo studio: ', studio)
        dispatch({
          type: STUDIO_REMOVE,
          payload: studio
        })
        return true
      }
      return false;

    }).catch(function (err) {
      return false
    })
  }
}
