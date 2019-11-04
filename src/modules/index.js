import { combineReducers } from 'redux'
import app from './app'
import studio from './studio'
import game from './game'
import user from './user'

export default combineReducers({
  app,
  studio,
  game,
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
