import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PreloaderStateType = {
  isPreloaderActive: boolean
}

const initialState: PreloaderStateType = {
  isPreloaderActive: true,
}

const preloaderStateSlice = createSlice({
  name: 'preloaderState',
  initialState,
  reducers: {
    setIsPreloaderActive(state, action: PayloadAction<boolean>) {
      state.isPreloaderActive = action.payload
    },
  },
})

export const { setIsPreloaderActive } = preloaderStateSlice.actions

export default preloaderStateSlice.reducer
