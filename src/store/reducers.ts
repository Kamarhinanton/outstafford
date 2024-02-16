import { combineReducers } from '@reduxjs/toolkit'
import callMenuReducer from './reducers/callMenuSlice'

const rootReducer = combineReducers({
  callMenu: callMenuReducer,
})

export default rootReducer
