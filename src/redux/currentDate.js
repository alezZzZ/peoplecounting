import { createSlice } from '@reduxjs/toolkit'

export const currentDate = createSlice({
  name: 'currentDate',
  initialState: {
    value: 0,
  },
  reducers: {
    /* eslint-disable no-param-reassign */
    setCurrentDate: (state, action) => {
      state.value = action.payload
    }
    /* eslint-enable no-param-reassign */
    ,
  },
})

// Action creators are generated for each case reducer function
export const {setCurrentDate } = currentDate.actions

export default currentDate.reducer