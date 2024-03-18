import { combineReducers } from '@reduxjs/toolkit'
import callMenuReducer from './reducers/callMenuSlice'
import preloaderStateReducer from './reducers/preloaderStateSlice'
import detectSliderPosition from '@/store/reducers/detectSliderPosition'
import isFirstLoading from '@/store/reducers/isFirstLoadingSlice'
import callCareerPopUp from '@/store/reducers/callCareerPopUpSlice'

const rootReducer = combineReducers({
  callMenu: callMenuReducer,
  preloaderState: preloaderStateReducer,
  detectSliderPosition: detectSliderPosition,
  isFirstLoading: isFirstLoading,
  callCareerPopUp: callCareerPopUp,
})

export default rootReducer
