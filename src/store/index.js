import { configureStore } from '@reduxjs/toolkit'
import placeMapReducer from '../reducers/placeMapReducer'
export default configureStore({
  reducer: {
    placeMap: placeMapReducer,
  },
})