/**********************************************************************
 * CONTANTS
 ***********************************************************************/
export const GAME_ADD = 'GAME/ADD'
export const GAME_UPDATE = 'GAME/UPDATE'
export const GAMES_SET = 'GAMES/SET'
export const GAME_SET_CURRENT = 'GAME/SET_CURRENT'
export const GAME_REMOVE = 'GAME/REMOVE'

const API_URL = process.env.REACT_APP_API_URL

/**********************************************************************
 * REDUX 
 ***********************************************************************/

const gameInitialState = { 
  games:[],
  game:null
}

export default (state = gameInitialState, action) => {
  switch (action.type) {
    case GAME_ADD:
      return Object.assign({}, state, {
        games: [
          ...state.games,
          action.game
        ]
      })
    case GAMES_SET:
      return {
        ...state,
        games: action.games
      }
    case GAME_SET_CURRENT:
        console.log('GAME_SET_CURRENT: ', action.game)
        return {
          ...state,
          game: action.game
        }
    case GAME_REMOVE:
      console.log('GAME_REMOVE: ', action.game)
      return Object.assign({}, state, {
        games: [
          ...state.games.filter(row => row.id != action.game.id)
        ]
      })
    /*  
    case GAME_UPDATE:
        console.log('GAME_UPDATE: ', ...action.games)
        let games  = ...state.games
        const key = Object.keys(games).find(id => games[id] === action.game.id);
        console.log('chave: ', key, games[key])

        games.filter(row => row.id != action.game.id)
        return Object.assign({}, state, {
          games: state.games
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
 * Add Game
 * @param {*} game 
 * @param {*} token 
 */
export const addGame = (game, token, onSuccess, onError) => {
  return dispatch => {

    // Form Data
    var formData = new FormData();
    //formData.append('id', game.id);
    formData.append('studio', game.studio);
    formData.append('name', game.name);
    formData.append('resume', game.resume);
    formData.append('genre', game.genre);
    formData.append('description', game.description);
    if(game.image ) {
      if(typeof game.image === 'object'){
        formData.append(`image`, game.image); // File
      }      
    }

    return fetch(`${API_URL}/game/`, {
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
          type: GAME_ADD,
          game: data
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

export const updateGame = (game, token, onSuccess, onError) => {
  return dispatch => {

    console.log('game: ', game)

    // Form Data
    var formData = new FormData();
    formData.append('id', game.id);
    formData.append('studio', game.studio);
    formData.append('name', game.name);
    formData.append('resume', game.resume);
    formData.append('genre', game.genre);
    formData.append('description', game.description);
    if(game.image ) {
      if(typeof game.image === 'object'){
        formData.append(`image`, game.image); // File
      }      
    }

    return fetch(`${API_URL}/game/${game.id}/`, {
      method: 'put',
      headers: {
        'Authorization': 'Token '+token
      },
      body: formData,
    }).then(function(response) {
      if(response.ok){
        return response.json();
      }else{
        console.log('updateGame: Erro 1', response)
        onError(response)
        return false;
      }
    }).then(function(data) {
      console.log('updateGame: data: ', data)
      if(data){
        dispatch({
          type: GAME_SET_CURRENT,
          game: data
        })
        /*
        dispatch({
          type: GAME_UPDATE,
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

export const getGame = (game, token, onSuccess, onError) => {
  return dispatch => {

    return fetch(`${API_URL}/game/${game.id}/`, {
      method: 'get',
      headers: {
        'Authorization': 'Token '+token
      }
    }).then(function(response) {
      if(response.ok){
        return response.json();
      }else{
        console.log('getGame: Erro 1', response)
        onError(response)
        return false;
      }
    }).then(function(data) {
      console.log('getGame: data: ', data)
      if(data){
        /*
        dispatch({
          type: GAME_SET_CURRENT,
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
 * Get Game List
 * @param {*} token 
 */
export const listGame = (token, studio, onSuccess) => {
  return dispatch => {
    return fetch(`${API_URL}/game/?studio=${studio.id}`, {
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
        type: GAMES_SET,
        games: data
      })
      onSuccess(data)
      return true
    }).catch(function (err) {
      return false
    })
  }
}

/**
 * Set Current Game
 * @param {*} game 
 */
export const setCurrentGame = (game) => {
  return dispatch => {
      dispatch({
        type: GAME_SET_CURRENT,
        game: game
      })
  }
}


/**
 * Remove Game
 * @param {*} token 
 */
export const removeGame = (game, token) => {
  return dispatch => {

    return fetch(`${API_URL}/game/${game.id}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token '+token
      },
      /*
      body: {
        id: game.id
      },
      */
    }).then(function(response) {
      if(response.ok){
        dispatch({
          type: GAME_REMOVE,
          game: game
        })
        return true
      }
      return false;

    }).catch(function (err) {
      return false
    })
  }
}
