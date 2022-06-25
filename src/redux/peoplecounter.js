import { createSlice } from '@reduxjs/toolkit'

export const counter = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    /* eslint-disable no-param-reassign */
    incrementByAmount: (state, action) => {
      state.value = action.payload
    }
    /* eslint-enable no-param-reassign */
    ,
  },
})

// Action creators are generated for each case reducer function
export const {incrementByAmount } = counter.actions

export default counter.reducer