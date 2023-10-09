import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: null,
  },
  reducers: {
    setTasks: (state, action) => {
      state.data = action.payload
    },
    setToUpdate: (state, action) => {
      console.log('inTaskSLICE:>>' )
      state.data = action.payload
    },
  },
})

export const { setTasks, setToUpdate } = tasksSlice.actions

export default tasksSlice.reducer