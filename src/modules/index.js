import { combineReducers } from 'redux'
import counter from './counter'
import studio from './studio'
import games from './games'

export default combineReducers({
  counter,
  studio,
  games
})
