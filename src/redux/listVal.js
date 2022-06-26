import { createSlice } from '@reduxjs/toolkit'

export const listVal = createSlice({
  name: 'listVal',
  initialState: {
    value: [],
  },
  reducers: {
    /* eslint-disable no-param-reassign */
    setCurrentVal: (state, action) => {
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
export const {setCurrentVal } = listVal.actions

export default listVal.reducer