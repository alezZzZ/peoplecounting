import { createSlice } from '@reduxjs/toolkit'

export const listDate = createSlice({
  name: 'listDate',
  initialState: {
    value: [],
  },
  reducers: {
    /* eslint-disable no-param-reassign */
    setCurrentDate: (state, action) => {
      if(state.value.length<10)
        state.value.push(action.payload)
       else{
        state.value.shift()
        state.value.push(action.payload)
       }
      
    }
    /* eslint-enable no-param-reassign */
    ,
  },
})

// Action creators are generated for each case reducer function
export const {setCurrentDate } = listDate.actions

export default listDate.reducer