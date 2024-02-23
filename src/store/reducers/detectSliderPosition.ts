import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CallMenuSliceType = {
  isTop: boolean
  isBottom: boolean
}

const initialState: CallMenuSliceType = {
  isTop: true,
  isBottom: false,
}

const sliderPositionSlice = createSlice({
  name: 'sliderPosition',
  initialState,
  reducers: {
    setIsTop(state, action: PayloadAction<boolean>) {
      state.isTop = action.payload
    },
    setIsBottom(state, action: PayloadAction<boolean>) {
      state.isBottom = action.payload
    },
  },
})

export const { setIsTop, setIsBottom } = sliderPositionSlice.actions

export default sliderPositionSlice.reducer
