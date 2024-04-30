import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ScrollDirectionType = {
  scrollDirection: 'up' | 'down'
}

const initialState: ScrollDirectionType = {
  scrollDirection: 'up',
}

const scrollDirectionSlice = createSlice({
  name: 'scrollDirectionState',
  initialState,
  reducers: {
    setScrollDirection(state, action: PayloadAction<'up' | 'down'>) {
      state.scrollDirection = action.payload
    },
  },
})

export const { setScrollDirection } = scrollDirectionSlice.actions

export default scrollDirectionSlice.reducer
