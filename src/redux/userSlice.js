import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log('setting state USERSLICE', state, 'ACTION', action)
      state.user = action.payload
    },
    logOut: (state) => {
      state.user = null
    },
  },
})

export const { setUser, logOut } = userSlice.actions

export default userSlice.reducer