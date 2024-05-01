import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ScrollDirectionType = {
  isHeaderAnimated: boolean
}

const initialState: ScrollDirectionType = {
  isHeaderAnimated: true,
}

const headerAnimatedSlice = createSlice({
  name: 'isHeaderAnimated',
  initialState,
  reducers: {
    setIsHeaderAnimated(state, action: PayloadAction<boolean>) {
      state.isHeaderAnimated = action.payload
    },
  },
})

export const { setIsHeaderAnimated } = headerAnimatedSlice.actions

export default headerAnimatedSlice.reducer
