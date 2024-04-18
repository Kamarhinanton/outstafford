import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FooterVisibilitySliceType = {
  isFooterVisible: boolean
}

const initialState: FooterVisibilitySliceType = {
  isFooterVisible: false,
}

const footerVisibilitySlice = createSlice({
  name: 'footerVisibility',
  initialState,
  reducers: {
    setIsFooterVisible(state, action: PayloadAction<boolean>) {
      state.isFooterVisible = action.payload
    },
  },
})

export const { setIsFooterVisible } = footerVisibilitySlice.actions

export default footerVisibilitySlice.reducer
