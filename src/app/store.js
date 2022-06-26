import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/peoplecounter'
import listDateReducer from '../redux/listDate'
import listValReducer from '../redux/listVal'



const reducer = {
  counter: counterReducer,
  listDate: listDateReducer,
  listVal: listValReducer
}

const store = configureStore({
  reducer,})


export default store;



