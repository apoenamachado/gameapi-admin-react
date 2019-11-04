/**********************************************************************
 * CONTANTS
 ***********************************************************************/
export const APP_SET_LOADING = 'APP/SET_LOADING'

/**********************************************************************
 * REDUX 
 ***********************************************************************/

const appInitialState = { 
  loading:false
}

export default (state = appInitialState, action) => {
  switch (action.type) {
    case APP_SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

/**********************************************************************
 * ACTIONS
 ***********************************************************************/
/**
 * Set Loading
 * @param {*} loading 
 */
export const setLoading = (loading) => {
  return dispatch => {
    dispatch({
      type: APP_SET_LOADING,
      payload: loading
    })
  }
}
