export const ADD_REQUESTED = 'STUDIO/ADD_REQUESTED'
export const ADD = 'STUDIO/ADD'
export const REMOVE_REQUESTED = 'STUDIO/REMOVE_REQUESTED'
export const REMOVE = 'STUDIO/REMOVE'

const initialState = { 
  id: null,
  owner:'',
  name: '', 
  date:'', 
  description:'', 
  image:'',

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
        name: state.name,
        date: state.date,
        resume: state.resume,
        thumb: state.thumb,
        downloads: state.downloads,
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

    default:
      return state
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
