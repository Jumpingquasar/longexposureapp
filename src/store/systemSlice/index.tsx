import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserProfileEntity } from '../types/user-model'

export interface SystemState {
    loading: boolean;
}

const initialState: SystemState = {
    loading: false
}


const systemSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
})

export const { setLoading } = systemSlice.actions
export default systemSlice.reducer