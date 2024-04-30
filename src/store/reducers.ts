import { combineReducers } from '@reduxjs/toolkit'
import callMenuReducer from './reducers/callMenuSlice'
import preloaderStateReducer from './reducers/preloaderStateSlice'
import detectSliderPosition from '@/store/reducers/detectSliderPosition'
import isFirstLoading from '@/store/reducers/isFirstLoadingSlice'
import callCareerPopUp from '@/store/reducers/callCareerPopUpSlice'
import callPopUp from '@/store/reducers/callPopUpSlice'
import footerVisibility from '@/store/reducers/footerVisibilitySlice'
import activeLink from '@/store/reducers/activeLinkSlice'
import scrollDirection from '@/store/reducers/scrollDirectionSlice'

const rootReducer = combineReducers({
  callMenu: callMenuReducer,
  preloaderState: preloaderStateReducer,
  detectSliderPosition: detectSliderPosition,
  isFirstLoading: isFirstLoading,
  callCareerPopUp: callCareerPopUp,
  callPopUp: callPopUp,
  footerVisibility: footerVisibility,
  activeLink: activeLink,
  scrollDirection: scrollDirection,
})

export default rootReducer
