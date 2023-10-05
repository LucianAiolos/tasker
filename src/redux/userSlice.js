import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.user
    },
    logOut: (state) => {
      state.user = null
    },
  },
})

export const { setUser, logOut } = userSlice.actions

export default userSlice.reducer