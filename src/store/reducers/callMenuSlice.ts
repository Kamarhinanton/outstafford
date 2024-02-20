import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CallMenuSliceType = {
  isMenuActive: boolean
}

const initialState: CallMenuSliceType = {
  isMenuActive: false,
}

const callMenuSlice = createSlice({
  name: 'callMenu',
  initialState,
  reducers: {
    setIsMenuActive(state, action: PayloadAction<boolean>) {
      state.isMenuActive = action.payload
    },
  },
})

export const { setIsMenuActive } = callMenuSlice.actions

export default callMenuSlice.reducer
