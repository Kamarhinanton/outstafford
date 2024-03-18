import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CallCareerPopUpSliceType = {
  isCareerPopUpActive: boolean
}

const initialState: CallCareerPopUpSliceType = {
  isCareerPopUpActive: false,
}

const callCareerPopUpSlice = createSlice({
  name: 'callCareerPopUp',
  initialState,
  reducers: {
    setIsCareerPopUpActive(state, action: PayloadAction<boolean>) {
      state.isCareerPopUpActive = action.payload
    },
  },
})

export const { setIsCareerPopUpActive } = callCareerPopUpSlice.actions

export default callCareerPopUpSlice.reducer
