import { combineReducers } from 'redux'
import studio from './studio'
import games from './games'
import user from './user'

export default combineReducers({
  studio,
  games,
  user
})
