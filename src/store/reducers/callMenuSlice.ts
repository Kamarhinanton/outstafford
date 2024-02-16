import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CallMenuSliceType = {
  callMenu: boolean
}

const initialState: CallMenuSliceType = {
  callMenu: false,
}

const callMenuSlice = createSlice({
  name: 'callMenu',
  initialState,
  reducers: {
    setCallMenu(state, action: PayloadAction<boolean>) {
      state.callMenu = action.payload
    },
  },
})

export const { setCallMenu } = callMenuSlice.actions

export default callMenuSlice.reducer
