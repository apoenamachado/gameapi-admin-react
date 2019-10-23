/**********************************************************************
 * CONTANTS
 ***********************************************************************/
export const STUDIO_ADD = 'STUDIO/ADD'
export const STUDIO_SET = 'STUDIO/SET'
export const STUDIO_REMOVE = 'STUDIO/REMOVE'

/**********************************************************************
 * REDUX 
 ***********************************************************************/

const studioInitialState = { 
  studios:[]
}

export default (state = studioInitialState, action) => {
  switch (action.type) {
    case STUDIO_ADD:
      return Object.assign({}, state, {
        studios: [
          ...state.studios,
          action.studio
        ]
      })
    case STUDIO_SET:
      return {
        ...state,
        studios: action.studios
      }
    case STUDIO_REMOVE:
      console.log('STUDIO_REMOVE: ', action.studio)
      return Object.assign({}, state, {
        studios: [
          ...state.studios.filter(row => row.id != action.studio.id)
        ]
      })
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
    formData.append('id', studio.id);
    formData.append('name', studio.name);
    formData.append('slug', studio.slug);
    formData.append('description', studio.description);
    formData.append(`image`, studio.image); // File

    return fetch('https://apoena.org/studio/', {
      method: 'post',
      headers: {
        'Authorization': 'Token '+token
      },
      body: formData,
    }).then(function(response) {
      if(response.ok){
        return response.json();
      }else{
        console.log('Erro 1', response)
        onError(response)
        return false;
      }
    }).then(function(data) {
      console.log('Data', data)
      if(data){
        dispatch({
          type: STUDIO_ADD,
          studio: data
        })
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
export const listStudio = (token) => {
  return dispatch => {
    return fetch('https://apoena.org/studio/', {
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
        type: STUDIO_SET,
        studios: data
      })
      return true
    }).catch(function (err) {
      return false
    })
  }
}


/**
 * Remove Studio
 * @param {*} token 
 */
export const removeStudio = (studio, token) => {
  return dispatch => {

    return fetch('https://apoena.org/studio/'+studio.id+'/', {
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
          studio: studio
        })
        return true
      }
      return false;

    }).catch(function (err) {
      return false
    })
  }
}

