import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null
}

export const authSlice = createSlice({
  name: 'auth_token',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.token = action.payload.token
    },
    unsetUserToken: (state, action) => {
      state.token = action.payload.token
    },
  }
})

export const { setUserToken, unsetUserToken } = authSlice.actions

export default authSlice.reducer