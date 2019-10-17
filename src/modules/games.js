export const GAME_ADD_REQUESTED = 'GAME/ADD_REQUESTED'
export const GAME_ADD = 'GAME/ADD'
export const GAME_REMOVE_REQUESTED = 'GAME/REMOVE_REQUESTED'
export const GAME_REMOVE = 'GAME/REMOVE'
export const GAME_SET = 'GAME/SET'

const initialState = { 
  games:[
    //{ name: "Game Name 1", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.mmotube.net/wp-content/uploads/2017/02/Preparing-For-Plays-SkySaga.png' },
    //{ name: "Game Name 2", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://i.ytimg.com/vi/Xdes4VYvmlI/maxresdefault.jpg'  },
    //{ name: "Game Name 3", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ920hatZfWjxhbJ7BqV5TupEewz368J-4cQbJnyR1FvXY17j'  },
    //{ name: "Game Name 4", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.selectgame.com.br/wp-content/uploads/2012/12/The-Legend-of-Heroes-Trails-in-the-Sky-Wallpaper.jpg'  },
    //{ name: "Game Name 5", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://s2.glbimg.com/UDZ7zPZiiIgpNk4Frwq1OBNL33Y=/0x0:592x370/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2013/05/20/c5.jpg'  },
    //{ name: "Game Name 6", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/125670607/original/b9d2b7682aaf776d570f8396ecc463eb10b2ba96.jpg'  }
  ],
  isAdd: false,
  isRemove: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_ADD_REQUESTED:
      return {
        ...state,
        isAdd: true
      }
    case GAME_ADD:
        console.log('GAME_ADD: ', state, action)
        return Object.assign({}, state, {
          games: [
            ...state.games,
            { 
              name: action.name, 
              date: action.date, 
              resume: action.resume, 
              downloads: action.downloads, 
              thumb:action.thumb
            }
          ]
        })
    case GAME_REMOVE_REQUESTED:
      return {
        ...state,
        isRemove: true
      }

    case GAME_REMOVE:
      return {
        ...state,
        isRemove: !state.isRemove
      }
    case GAME_SET:
      console.log('GAME_SET: ', state, action)
      return Object.assign({}, state, {
        games: action.games
      })
    default:
      return state
  }
}

export const addGame = (game) => {
  return dispatch => {
    dispatch({
      type: GAME_ADD_REQUESTED
    })

    dispatch({
      type: GAME_ADD,
      name: game.name,
      resume: game.resume,
      date: game.date,
      thumb: game.thumb,
    })
  }
}
export const setGames = (games) => {
  return dispatch => {
    /*
    dispatch({
      type: GAME_ADD_REQUESTED
    })
    */
    dispatch({
      type: GAME_SET,
      games: games
    })
  }
}

export const addGameAsync = () => {
  return dispatch => {
    dispatch({
      type: GAME_ADD_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: GAME_ADD
      })
    }, 2000)
  }
}

export const removeGame = () => {
  return dispatch => {
    dispatch({
      type: GAME_REMOVE_REQUESTED
    })

    dispatch({
      type: GAME_REMOVE
    })
  }
}

export const removeGameAsync = () => {
  return dispatch => {
    dispatch({
      type: GAME_REMOVE_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: GAME_REMOVE
      })
    }, 2000)
  }
}
