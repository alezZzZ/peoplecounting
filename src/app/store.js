import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/peoplecounter'
import currentDateReducer from '../redux/currentDate'



const reducer = {
  counter: counterReducer,
  currentDate: currentDateReducer
}

const store = configureStore({
  reducer,})


export default store;



