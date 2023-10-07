import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import tasksSlice from './tasksSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    tasks: tasksSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
})