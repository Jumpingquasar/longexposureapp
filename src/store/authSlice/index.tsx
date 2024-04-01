import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserProfileEntity } from '../types/user-model'

export interface UserState {
  user: UserProfileEntity
}

const initialState: UserState = {
  user: {
    Email: '',
    isGuest: true,
    encryptedFormData: ''
  },
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProfileEntity>) => {
      state.user = action.payload;
    },
  },
})

export const { setUser } = authSlice.actions
export default authSlice.reducer