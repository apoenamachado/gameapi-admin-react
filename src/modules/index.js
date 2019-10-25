import { combineReducers } from 'redux'
import studio from './studio'
import game from './game'
import user from './user'

export default combineReducers({
  studio,
  game,
  user
})
