/**********************************************************************
 * CONTANTS
 ***********************************************************************/
export const DLC_ADD = 'DLC/ADD'
export const DLC_UPDATE = 'DLC/UPDATE'
export const DLCS_SET = 'DLCS/SET'
export const DLC_SET_CURRENT = 'DLC/SET_CURRENT'
export const DLC_REMOVE = 'DLC/REMOVE'

const API_URL = process.env.REACT_APP_API_URL

/**********************************************************************
 * REDUX 
 ***********************************************************************/

const dlcInitialState = { 
  dlcs:[],
  dlc:null
}

export default (state = dlcInitialState, action) => {
  switch (action.type) {
    case DLC_ADD:
      return Object.assign({}, state, {
        dlcs: [
          ...state.dlcs,
          action.payload
        ]
      })
    case DLCS_SET:
      return {
        ...state,
        dlcs: action.payload
      }
    case DLC_SET_CURRENT:
        console.log('DLC_SET_CURRENT: ', action.dlc)
        return {
          ...state,
          dlc: action.payload
        }
    case DLC_REMOVE:
      console.log('DLC_REMOVE: ', action.dlc)
      return Object.assign({}, state, {
        dlcs: [
          ...state.dlcs.filter(row => row.id != action.payload.id)
        ]
      })
    /*  
    case DLC_UPDATE:
        console.log('DLC_UPDATE: ', ...action.dlcs)
        let dlcs  = ...state.dlcs
        const key = Object.keys(dlcs).find(id => dlcs[id] === action.dlc.id);
        console.log('chave: ', key, dlcs[key])

        dlcs.filter(row => row.id != action.dlc.id)
        return Object.assign({}, state, {
          dlcs: state.dlcs
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
 * Add dlc
 * @param {*} dlc 
 * @param {*} token 
 */
export const addDlc = (dlc, token, onSuccess, onError) => {
  return dispatch => {

    // Form Data
    var formData = new FormData();

    //formData.append('id', dlc.id);
    formData.append('game', dlc.game);
    formData.append('name', dlc.name);
    formData.append('resume', dlc.resume);
    formData.append('genre', dlc.genre);
    formData.append('description', dlc.description);

    formData.append('type', dlc.type);
    formData.append('status', dlc.status);
    formData.append('savepath', dlc.savepath);

    // Imagem
    if(dlc.thumb) {
      if(typeof dlc.thumb === 'object'){
        formData.append(`thumb`, dlc.thumb); // File
      }      
    }

    // Arquivo
    if(dlc.filepath) {
      if(typeof dlc.filepath === 'object'){
        formData.append('filepath', dlc.filepath);
      }      
    }

    return fetch(`${API_URL}/dlc/`, {
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
          type: DLC_ADD,
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

export const updateDlc = (dlc, token, onSuccess, onError) => {
  return dispatch => {

    // Form Data
    var formData = new FormData();
    formData.append('id', dlc.id);
    formData.append('game', dlc.game);
    formData.append('name', dlc.name);
    formData.append('resume', dlc.resume);
    formData.append('genre', dlc.genre);
    formData.append('description', dlc.description);

    formData.append('type', dlc.type);
    formData.append('status', dlc.status);
    formData.append('savepath', dlc.savepath);

    // Imagem
    if(dlc.thumb) {
      if(typeof dlc.thumb === 'object'){
        formData.append(`thumb`, dlc.thumb); // File
      }      
    }

    // Arquivo
    if(dlc.filepath) {
      if(typeof dlc.filepath === 'object'){
        formData.append('filepath', dlc.filepath);
      }      
    }

    console.log('updateDlc dlc: ', dlc, formData, `${API_URL}/dlc/${dlc.id}/`)

    return fetch(`${API_URL}/dlc/${dlc.id}/`, {
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
      console.log('updatedlc: data: ', data)
      if(data){
        dispatch({
          type: DLC_SET_CURRENT,
          payload: data
        })
        /*
        dispatch({
          type: DLC_UPDATE,
          dlc: data
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

export const getDlc = (dlc, token, onSuccess, onError) => {
  return dispatch => {

    console.log('dlc', dlc)

    return fetch(`${API_URL}/dlc/${dlc.id}/?game=${dlc.game}`, {
      method: 'get',
      headers: {
        'Authorization': 'Token '+token
      }
    }).then(function(response) {
      if(response.ok){
        return response.json();
      }else{
        console.log('getdlc: Erro 1', response)
        onError(response)
        return false;
      }
    }).then(function(data) {
      console.log('getdlc: data: ', data)
      if(data){
        /*
        dispatch({
          type: DLC_SET_CURRENT,
          dlc: data
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
 * Get dlc List
 * @param {*} token 
 */
export const listDlc = (token, game, onSuccess) => {
  return dispatch => {
    return fetch(`${API_URL}/dlc/?game=${game.id}`, {
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
        type: DLCS_SET,
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
 * Set Current dlc
 * @param {*} dlc 
 */
export const setCurrentDlc = (dlc) => {
  return dispatch => {
      dispatch({
        type: DLC_SET_CURRENT,
        payload: dlc
      })
  }
}


/**
 * Remove dlc
 * @param {*} token 
 */
export const removeDlc = (dlc, token, onSuccess) => {
  return dispatch => {

    return fetch(`${API_URL}/dlc/${dlc.id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      },
      /*
      body: {
        id: dlc.id
      },
      */
    }).then(function(response) {
      if(response.ok){
        dispatch({
          type: DLC_REMOVE,
          payload: dlc
        })
        onSuccess()
        return true
      }
      return false;

    }).catch(function (err) {
      return false
    })
  }
}
