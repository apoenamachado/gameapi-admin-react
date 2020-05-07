import { combineReducers } from 'redux'
import app from './app'
import studio from './studio'
import game from './game'
import dlc from './dlc'
import user from './user'

export default combineReducers({
  app,
  studio,
  game,
  dlc,
  user
})

/* TODO: centralizar actions
export const actions = { 
  App: app,
  Studio:studio,
  Game:game,
  User:user
 }
*/
