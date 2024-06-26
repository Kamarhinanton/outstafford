import { combineReducers } from '@reduxjs/toolkit'
import callMenuReducer from './reducers/callMenuSlice'
import preloaderStateReducer from './reducers/preloaderStateSlice'
import detectSliderPosition from '@/store/reducers/detectSliderPosition'
import isFirstLoading from '@/store/reducers/isFirstLoadingSlice'
import callCareerPopUp from '@/store/reducers/callCareerPopUpSlice'
import callPopUp from '@/store/reducers/callPopUpSlice'
import activeLink from '@/store/reducers/activeLinkSlice'
import isHeaderAnimated from '@/store/reducers/isHeaderAnimatedSlice'

const rootReducer = combineReducers({
  callMenu: callMenuReducer,
  preloaderState: preloaderStateReducer,
  detectSliderPosition: detectSliderPosition,
  isFirstLoading: isFirstLoading,
  callCareerPopUp: callCareerPopUp,
  callPopUp: callPopUp,
  activeLink: activeLink,
  isHeaderAnimated: isHeaderAnimated,
})

export default rootReducer
