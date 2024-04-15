import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CallPopUpSliceType = {
  isPopUpActive: boolean
}

const initialState: CallPopUpSliceType = {
  isPopUpActive: false,
}

const callPopUpSlice = createSlice({
  name: 'callPopUp',
  initialState,
  reducers: {
    setIsPopUpActive(state, action: PayloadAction<boolean>) {
      state.isPopUpActive = action.payload
    },
  },
})

export const { setIsPopUpActive } = callPopUpSlice.actions

export default callPopUpSlice.reducer
