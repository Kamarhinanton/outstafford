import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ActiveLinkSliceType = {
  activeLink: string
}

const initialState: ActiveLinkSliceType = {
  activeLink: '',
}

const activeLinkSlice = createSlice({
  name: 'activeLink',
  initialState,
  reducers: {
    setActiveLink(state, action: PayloadAction<string>) {
      state.activeLink = action.payload
    },
  },
})

export const { setActiveLink } = activeLinkSlice.actions

export default activeLinkSlice.reducer
