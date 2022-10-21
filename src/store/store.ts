import { configureStore } from '@reduxjs/toolkit'
import floatersReducer from '../features/floaters/floatersSlice'

export default configureStore({
  reducer: {
    floaters: floatersReducer
  }
})

