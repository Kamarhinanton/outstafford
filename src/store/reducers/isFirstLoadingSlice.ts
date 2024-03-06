import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CallMenuSliceType = {
  isFirstLoading: boolean
}

const initialState: CallMenuSliceType = {
  isFirstLoading: true,
}

const isFirstLoadingSlice = createSlice({
  name: 'isFirstLoading',
  initialState,
  reducers: {
    setIsFirstLoading(state, action: PayloadAction<boolean>) {
      state.isFirstLoading = action.payload
    },
  },
})

export const { setIsFirstLoading } = isFirstLoadingSlice.actions

export default isFirstLoadingSlice.reducer
