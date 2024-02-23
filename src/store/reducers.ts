import { combineReducers } from '@reduxjs/toolkit'
import callMenuReducer from './reducers/callMenuSlice'
import preloaderStateReducer from './reducers/preloaderStateSlice'
import detectSliderPosition from '@/store/reducers/detectSliderPosition'

const rootReducer = combineReducers({
  callMenu: callMenuReducer,
  preloaderState: preloaderStateReducer,
  detectSliderPosition: detectSliderPosition,
})

export default rootReducer
